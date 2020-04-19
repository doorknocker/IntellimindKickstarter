const express = require("express");
const path = require("path");
var bodyParser = require("body-parser");
var uniqid = require("uniqid");

const {
  hget,
  hset,
  zadd,
  zrange,
  zscore,
  zincrby,
  zcount,
  zrevrank,
} = require("./server/services/redis");
const { sendEmail } = require("./server/services/sendgrid");

const { test, trim } = require("./server/utils/email");
const convertToObj = require("./server/utils/convertToObj");

const port = process.env.PORT || 4000;

const app = express();

app.use(express.static("build"));
app.use(bodyParser.json());

app.get("/v1/user", async (req, res) => {
  // if id is not there
  if (!req.query.id) {
    return res.status(400).send("Id not provided");
  }
  // Check if id is valid

  const email = await hget("referralIds", req.query.id);

  // throw error if email is not good
  if (email === null) {
    return res.status(400).send("Id is invalid");
  }

  const score = await zscore("leadershipBoard", email);
  const total = await zcount("leadershipBoard", "-inf", "+inf");
  const rank = await zrevrank("leadershipBoard", email);

  const top = await zrange("leadershipBoard", 0, 5, "WITHSCORES");
  const launch = "2020-04-25T22:46:31.000Z";
  res.send({
    email,
    score,
    spot: rank + 1,
    launch,
    leadershipBoard: {
      total,
      top: convertToObj(top),
    },
  });
});

app.post("/v1/user", async (req, res) => {
  // check email is proper
  if (!test(req.body.email)) {
    return res.status(400).send("Not valid Email");
  }

  const email = trim(req.body.email);

  // check if it exists

  const score = await zscore("leadershipBoard", email);

  // if it exists send error

  if (score !== null) {
    return res.status(400).send("Email is already registered");
  }

  // if dosent exist

  // if there is a referral guy increase his points
  if (req.body.ref) {
    const referralEmail = await hget("referralIds", req.body.ref);
    if (referralEmail === null) {
      return res.status(400).send("Referral Id invalid");
    }
    await zincrby("leadershipBoard", 50, referralEmail);
  }

  // create new referral id
  const referralId = uniqid();
  // create hset
  await hset("referralIds", referralId, email);
  // create zadd
  await zadd("leadershipBoard", 0, email);

  sendEmail(email, referralId).then(console.log).catch(console.error);

  // send success with generated referral id
  res.send({
    referralId,
  });
});

// Handles any requests that don't match the ones above
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/build/index.html"));
});

app.listen(port, () => {
  console.log("Server is running on " + port + " port");
});
