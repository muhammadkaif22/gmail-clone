import React from "react";

import { Inbox, People, LocalOffer, MobileFriendly } from "@mui/icons-material";

import {
  selectCurrentMailcategroy,
  setCurrentMailcategroy,
} from "../../Redux/features/AllGlobalStates";

import { useSelector, useDispatch } from "react-redux";

const MassagesContainer = () => {
  const currentCategroy = useSelector(selectCurrentMailcategroy);
  const dispatch = useDispatch();

  return (
    <div className="main__MessageContainer">
      <div className="MessageContainer__tabs">
        {/* tabs */}
        <div
          className={`tab ${currentCategroy == "primary" && "primary"}`}
          onClick={() => dispatch(setCurrentMailcategroy("primary"))}
        >
          <Inbox className="icon" />
          <p>Primary</p>
          <span></span>
        </div>

        <div
          className={`tab ${currentCategroy == "social" && "social"}`}
          onClick={() => dispatch(setCurrentMailcategroy("social"))}
        >
          <People className="icon" />
          <p>Social</p>
        </div>

        <div
          className={`tab ${currentCategroy == "promotions" && "promotions"}`}
          onClick={() => dispatch(setCurrentMailcategroy("promotions"))}
        >
          <LocalOffer className="icon" />
          <p>Promotions</p>
          <span></span>
        </div>

        <div
          className={`tab ${currentCategroy == "updates" && "updates"}`}
          onClick={() => dispatch(setCurrentMailcategroy("updates"))}
        >
          <MobileFriendly className="icon" />
          <p>Updates</p>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default MassagesContainer;
