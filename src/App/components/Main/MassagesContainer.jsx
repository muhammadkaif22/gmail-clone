import React from "react";

import { Inbox, People, LocalOffer, MobileFriendly } from "@mui/icons-material";

const MassagesContainer = () => {
  return (
    <div className="main__MessageContainer">
      <div className="MessageContainer__tabs">
        <div className="tab">
          <Inbox className="icon" />
          <p>Primary</p>
          <span></span>
        </div>

        <div className="tab">
          <People className="icon" />
          <p>Social</p>
          <span></span>
        </div>

        <div className="tab">
          <LocalOffer className="icon" />
          <p>Promotions</p>
          <span></span>
        </div>

        <div className="tab">
          <MobileFriendly className="icon" />
          <p>Updates</p>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default MassagesContainer;
