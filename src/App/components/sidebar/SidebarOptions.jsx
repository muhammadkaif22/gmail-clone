import React from "react";

import {
  Inbox,
  Star,
  WatchLater,
  InsertDriveFile,
  Send,
} from "@mui/icons-material";
import {
  selectCurrentActiveMailOption,
  setCurrentActiveMailOption,
} from "../../Redux/features/AllGlobalStates";
import { useSelector, useDispatch } from "react-redux";

const SidebarOptions = () => {
  const ActiveOption = useSelector(selectCurrentActiveMailOption);
  const dispatch = useDispatch();

  return (
    <>
      <div
        className={`sidebarr__option ${
          ActiveOption == "inbox" && "active-inbox"
        }`}
        onClick={() => dispatch(setCurrentActiveMailOption("inbox"))}
      >
        <span>
          <Inbox className="icon" />
          <p>inbox</p>
        </span>
        <h5>500+</h5>
      </div>

      <div
        className={`sidebarr__option ${ActiveOption == "send" && "active"}`}
        onClick={() => dispatch(setCurrentActiveMailOption("send"))}
      >
        <span>
          <Send className="icon" />
          <p>Send</p>
        </span>
      </div>

      <div className="sidebarr__option">
        <span>
          <Star className="icon" />
          <p>starred</p>
        </span>
      </div>

      <div className="sidebarr__option">
        <span>
          <WatchLater className="icon" />
          <p>snoozed</p>
        </span>
      </div>

      <div className="sidebarr__option">
        <span>
          <InsertDriveFile className="icon" />
          <p>drafts</p>
        </span>
      </div>

      <div className="sidebarr__option">
        <span>
          <Inbox className="icon" />
          <p>inbox</p>
        </span>
      </div>

      <div className="sidebarr__option">
        <span>
          <Inbox className="icon" />
          <p>inbox</p>
        </span>
      </div>

      <div className="sidebarr__option">
        <span>
          <Inbox className="icon" />
          <p>inbox</p>
        </span>
      </div>

      <div className="sidebarr__option">
        <span>
          <Inbox className="icon" />
          <p>inbox</p>
        </span>
      </div>

      <div className="sidebarr__option">
        <span>
          <Inbox className="icon" />
          <p>inbox</p>
        </span>
      </div>
      <div className="sidebarr__option">
        <span>
          <Inbox className="icon" />
          <p>inbox</p>
        </span>
      </div>

      <div className="sidebarr__option">
        <span>
          <Inbox className="icon" />
          <p>inbox</p>
        </span>
      </div>
    </>
  );
};

export default SidebarOptions;
