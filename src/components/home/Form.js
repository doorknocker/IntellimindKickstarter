import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Redirect } from "react-router-dom";

import { useQuery } from "../../customHooks/useQuery";

import arrow from "../../images/arrow.svg";
import loadingGif from "../../images/loading.gif";

const Form = () => {
  const [email, setEmail] = useState("");
  const [{ loading, error, message, referralId }, setResponse] = useState({
    loading: false,
    error: false,
    message: "",
    referralId: "",
  });
  const query = useQuery();
  const ref = query.get("ref");

  async function handleSubmit(e) {
    e.preventDefault();
    setResponse({
      loading: true,
    });
    try {
      const response = await axios.post("/v1/user", {
        email,
        ref,
      });
      setResponse({
        loading: false,
        ...response.data,
      });
    } catch (e) {
      setResponse({
        loading: false,
        error: true,
        message: e.response.data,
      });
    }
  }
  if (!loading && referralId) {
    return <Redirect to={`/waitlist?ref=${referralId}`} />;
  }
  return (
    <StyledForm onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email Address"
        value={email}
        required
        onChange={(e) => setEmail(e.target.value)}
      />
      <button disabled={loading}>
        <img src={loading ? loadingGif : arrow} alt="action" />
      </button>
      {error && <div>{message}</div>}
    </StyledForm>
  );
};

const StyledForm = styled.form`
  padding: 0.6rem 1rem;
  padding-left: 1.4rem;
  background: var(--primary);
  border-radius: 50px;
  margin: 1rem 0;
  display: flex;
  align-items: center;
  position: relative;
  > input {
    background: transparent;
    border: none;
    color: white;
    font-size: 0.9rem;
    width: 15rem;
  }
  > input::placeholder {
    color: white;
    font-weight: normal;
  }
  > input:focus {
    outline: none;
  }
  > button {
    display: flex;
    align-items: center;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
  }
  img {
    width: 1rem;
    height: 1rem;
  }
  > div {
    position: absolute;
    color: var(--alert);
    bottom: -17px;
  }

  @media only screen and (max-width: 892px) {
    > input {
      width: 12rem;
    }
  }
`;

export default Form;
