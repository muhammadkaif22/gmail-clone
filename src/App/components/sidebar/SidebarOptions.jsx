import React from "react";

import {
  Inbox,
  Star,
  WatchLater,
  InsertDriveFile,
  Send,
} from "@mui/icons-material";

const SidebarOptions = () => {
  return (
    <>
      <Options Icon={Inbox} Name={"inbox"} isActive={true} unreadMsg={400} />
      <Options Icon={Send} Name={"send"} isActive={false} />
      <Options Icon={Star} Name={"starred"} isActive={false} />
      <Options Icon={WatchLater} Name={"snoozed"} isActive={false} />
      <Options Icon={InsertDriveFile} Name={"drafts"} isActive={false} />
      <Options Icon={Inbox} Name={"inbox"} isActive={false} />
      <Options Icon={Inbox} Name={"inbox"} isActive={false} />
      <Options Icon={Inbox} Name={"inbox"} isActive={false} />
      <Options Icon={Inbox} Name={"inbox"} isActive={false} />
      <Options Icon={Inbox} Name={"inbox"} isActive={false} />
      <Options Icon={Inbox} Name={"inbox"} isActive={false} />
    </>
  );
};

const Options = ({ Icon, Name, isActive, unreadMsg }) => {
  return (
    <div className={`sidebarr__option ${isActive && "active"}`}>
      <span>
        <Icon className="icon" />
        <p>{Name}</p>
      </span>

      <h5>{unreadMsg}</h5>
    </div>
  );
};

export default SidebarOptions;
