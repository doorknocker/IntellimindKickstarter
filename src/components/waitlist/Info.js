import React, { useContext } from "react";

import Timer from "./Timer";
import DetailsContext from "./DetailsContext";
import Social from "./Social";

import { MainLayout } from "../../styles/layouts";
import { MediumTitle, SmallTitle, MiniTitle } from "../../styles/headings";
import { Paragraph } from "../../styles/paragraphs";
import { HighlightTag, AlertTag, BasicTag } from "../../styles/common";

const Info = () => {
  const { loading, score, spot, ref, leadershipBoard } = useContext(
    DetailsContext
  );
  const url = `${window.location.origin}/?ref=${ref}`;

  return (
    <MainLayout>
      <MediumTitle>
        Product launch in <Timer />
      </MediumTitle>
      <Paragraph>
        Till now you have scored{" "}
        <HighlightTag>{!loading && score} points</HighlightTag>, and you are
        running behind <AlertTag>{!loading && spot - 1} people</AlertTag>. And
        there in total of{" "}
        <BasicTag>{!loading && leadershipBoard.total} people</BasicTag>{" "}
        contesting in this activity.
      </Paragraph>
      <SmallTitle>Interested in the early access?</SmallTitle>
      <Paragraph>
        Get early access by referring your friends. The more friends that join,
        sooner you'll get access.
      </Paragraph>
      <Social url={url} />
      <Paragraph>Or share this unique link.</Paragraph>
      <MiniTitle>{url}</MiniTitle>
    </MainLayout>
  );
};

export default Info;
