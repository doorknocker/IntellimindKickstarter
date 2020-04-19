import React, { useEffect, useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

import { useQuery } from "../customHooks/useQuery";

import Ranking from "../components/waitlist/Ranking";
import Info from "../components/waitlist/Info";
import DetailsContext from "../components/waitlist/DetailsContext";

import { Layout } from "../styles/layouts";

const WaitList = () => {
  const query = useQuery();
  const ref = query.get("ref");
  const [details, setDetails] = useState({
    loading: true,
    error: false,
  });
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`/v1/user?id=${ref}`);
        setDetails({ ...response.data, loading: false, ref });
      } catch (e) {
        setDetails({ error: true });
      }
    }
    fetchData();
  }, [ref]);
  if (details.error) {
    return <Redirect to="/not-found" />;
  }
  return (
    <DetailsContext.Provider value={details}>
      <Layout>
        <Ranking />
        <Info />
      </Layout>
    </DetailsContext.Provider>
  );
};

export default WaitList;
