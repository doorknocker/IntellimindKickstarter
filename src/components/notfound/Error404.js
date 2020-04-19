import React from "react";
import styled from "styled-components" ;
import {Link} from "react-router-dom" ;

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
      <div>
        <BigTitle>
          <span>404</span> Not Found
        </BigTitle>
        <Link to="/" ><GoBack>Home Page</GoBack></Link>
      </div>      
    </FocusedLayout>
  );
};

export default Brand;
