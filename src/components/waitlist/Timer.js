import React, { useState, useContext, useEffect } from "react";

import DetailsContext from "./DetailsContext";

const Timer = () => {
  const [time, setTime] = useState("Loading...");
  const details = useContext(DetailsContext);
  useEffect(() => {
    if (details.launch) {
      const launchDate = new Date(details.launch);
      const refresh = setInterval(() => {
        const dateNow = new Date();

        var seconds = Math.floor((launchDate - dateNow) / 1000);
        var minutes = Math.floor(seconds / 60);
        var hours = Math.floor(minutes / 60);
        var days = Math.floor(hours / 24);

        hours = hours - days * 24;
        minutes = minutes - days * 24 * 60 - hours * 60;
        seconds =
          seconds - days * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60;
        setTime(`${hours + days * 24}hrs ${minutes}mins ${seconds}secs`);
      }, 1000);
      return () => clearInterval(refresh);
    }
  }, [details, details.launch]);
  return <span>{time}</span>;
};

export default Timer;
