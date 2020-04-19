import React from "react";
import { Grid } from "../../styles/common";

import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";

const ICON_DEFAULTS = {
  size: 48,
  round: true,
  bgStyle: { fill: "var(--bgBrand)" },
  iconFillColor: "var(--primary)",
};

const Social = ({ url }) => {
  return (
    <Grid>
      <FacebookShareButton hashtag="intellimind" url={url}>
        <FacebookIcon {...ICON_DEFAULTS} />
      </FacebookShareButton>
      <LinkedinShareButton url={url}>
        <LinkedinIcon {...ICON_DEFAULTS} />
      </LinkedinShareButton>
      <TwitterShareButton url={url}>
        <TwitterIcon {...ICON_DEFAULTS} />
      </TwitterShareButton>
      <WhatsappShareButton url={url}>
        <WhatsappIcon {...ICON_DEFAULTS} />
      </WhatsappShareButton>
    </Grid>
  );
};

export default Social;
