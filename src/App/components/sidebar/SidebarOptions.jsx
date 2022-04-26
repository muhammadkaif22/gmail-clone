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
      <Options Icon={Inbox} Name={"inbox"} isActive={true} />
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

const Options = ({ Icon, Name, isActive }) => {
  return (
    <div className={`sidebarr__option ${isActive && "active"}`}>
      <Icon className="icon" />
      <span>{Name}</span>
    </div>
  );
};

export default SidebarOptions;
