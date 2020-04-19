import React from "react";

import { BigTitle } from "../../styles/headings";
import { FocusedLayout } from "../../styles/layouts";

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
      </div>
    </FocusedLayout>
  );
};

export default Brand;
