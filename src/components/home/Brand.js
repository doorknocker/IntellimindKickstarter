import React from "react";
import { Link } from "react-router-dom";

import { BigTitle } from "../../styles/headings";
import { FocusedLayout } from "../../styles/layouts";

import intellimind from "../../images/intellimind.svg";
import creditvoyager from "../../images/creditvoyager.png";

const Brand = () => {
  return (
    <FocusedLayout>
      <a href="https://www.intellimind.com/en">
        <img src={intellimind} alt="logo" />
      </a>
      <div>
        <img src={creditvoyager} alt="Credit Voyager" />
        <BigTitle>
          Transform risk into <span>Opportunity</span>
        </BigTitle>
      </div>
    </FocusedLayout>
  );
};

export default Brand;
