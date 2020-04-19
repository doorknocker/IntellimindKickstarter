const redis = require("redis");
const { promisify } = require("util");

const client = redis.createClient();

const hget = promisify(client.hget).bind(client);
const hset = promisify(client.hsetnx).bind(client);

const zadd = promisify(client.zadd).bind(client);
const zrange = promisify(client.zrevrange).bind(client);
const zscore = promisify(client.zscore).bind(client);
const zincrby = promisify(client.zincrby).bind(client);
const zcount = promisify(client.zcount).bind(client);
const zrevrank = promisify(client.zrevrank).bind(client);

module.exports = {
  hget,
  hset,
  zadd,
  zrange,
  zscore,
  zincrby,
  zcount,
  zrevrank,
};
