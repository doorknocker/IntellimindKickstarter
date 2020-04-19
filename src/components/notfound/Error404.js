import React from "react";
import styled from "styled-components" ;

import { BigTitle } from "../../styles/headings";
import { FocusedLayout } from "../../styles/layouts";
import { GoBack } from "../../styles/common" ;

import intellimind from "../../images/intellimind.svg";

const Brand = () => {
  return (
    <FocusedLayout>
      <a href="https://www.intellimind.com/en">
        <img src={intellimind} alt="logo" />
      </a>
      <div style={{display: "block"}}>
        <BigTitle>
          <span>404</span> Not Found
        </BigTitle>
        <GoBack><a href="/" style={{textDecoration: "none", fontSize:"large", color: "white"}}>Go Back</a></GoBack>
      </div>      
    </FocusedLayout>
  );
};

export default Brand;
