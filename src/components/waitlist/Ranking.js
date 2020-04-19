import React, { useContext } from "react";

import DetailsContext from "./DetailsContext";

import { BigTitle, MediumTitle } from "../../styles/headings";
import { FocusedLayout } from "../../styles/layouts";

import intellimind from "../../images/intellimind.svg";
import creditvoyager from "../../images/creditvoyager.png";

const Ranking = () => {
  const { loading, leadershipBoard, spot } = useContext(DetailsContext);

  return (
    <FocusedLayout>
      <a href="https://www.intellimind.com/en">
        <img src={intellimind} alt="logo" />
      </a>
      <div>
        <img src={creditvoyager} alt="Credit Voyager" />
        <BigTitle>
          Your waitlist spot <span>#{!loading && spot}</span>
        </BigTitle>
        <MediumTitle>Top in the line</MediumTitle>
        <table>
          <thead>
            <tr>
              <th>Ranking</th>
              <th>Email</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {!loading &&
              leadershipBoard.top.map(({ email, score }, index) => {
                return (
                  <tr key={email}>
                    <td>{index + 1}</td>
                    <td>{email}</td>
                    <td>{score}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        <p>* The top 6 people will get a lifetime subscription</p>
      </div>
    </FocusedLayout>
  );
};

export default Ranking;
