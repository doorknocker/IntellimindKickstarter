import React from "react";

import { MainLayout } from "../../styles/layouts";

import { MediumTitle } from "../../styles/headings";
import { Paragraph } from "../../styles/paragraphs";

import Form from "./Form";

const SignUp = () => {
  return (
    <MainLayout>
      <MediumTitle>Earn your 1 year subscription.</MediumTitle>
      <Paragraph>
        From a single website, you can use Credit Voyager® for multiple
        companies, in multiple countries, in multiple languages. In production
        in more than 40 countries the platform is connected to more than 40
        credit agencies and 4 major credit insurers. It is a one time offer in
        which as much as you refer to others you will get a chance to have a it
        for one year, no questions asked.       
      </Paragraph>
      <Paragraph>
        You will receive fastest service with Credit Voyager. Full customer support 24X7. Sign up now to have access to the product at the earliest.
      </Paragraph>
      <Form />
    </MainLayout>
  );
};

export default SignUp;
