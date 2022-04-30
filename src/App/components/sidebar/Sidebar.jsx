import React from "react";

import SidebarOptions from "./SidebarOptions";

import { Videocam, Keyboard, Add } from "@mui/icons-material";
import { Avatar, IconButton, Button } from "@mui/material";

import {
  selectOpensidebarState,
  OpenAndCloseopenComposeMail,
} from "../../Redux/features/AllGlobalStates";
import { selectInboxTotalMails } from "../../Redux/features/MailsSlice";
import { selectUser } from "../../Redux/features/UserSilce";
import { useSelector, useDispatch } from "react-redux";

import "./sidebar.css";

const Sidebar = () => {
  const user = useSelector(selectUser);
  const openSidebar = useSelector(selectOpensidebarState);
  const InboxTotalMails = useSelector(selectInboxTotalMails);
  const dispatch = useDispatch();

  return (
    <div className={`sidebar ${openSidebar && "active"}`}>
      <div className="sidebar__top">
        <Button
          className="sidebar__composeBtn"
          onClick={() => dispatch(OpenAndCloseopenComposeMail())}
        >
          <img
            src="https://www.gstatic.com/images/icons/material/colored_icons/2x/create_32dp.png"
            alt="gmail"
          />
          <span>compose</span>
        </Button>
      </div>

      <div className="sidebar__optionsContainer">
        <SidebarOptions InboxMails={InboxTotalMails} />
      </div>

      <div className="sidebar__meetingCotainer">
        <h4>Meet</h4>
        <div className="sidebar__meetingoptions">
          <div className="sidebar__option">
            <Videocam className="icon" />
            <span>New meeting</span>
          </div>

          <div className="sidebar__option">
            <Keyboard className="icon" />
            <span>Join a meeting</span>
          </div>
        </div>
      </div>

      <div className="sidebar__hangoutsContainer">
        <h4>Hangouts</h4>

        <div className="hangoutsContainer__userprofile">
          <span>
            <Avatar
              alt={user?.displayName}
              src={user?.photoURL}
              className="userprofile__profile"
              style={{ cursor: "pointer" }}
            />
            <p>{user?.displayName}</p>
          </span>

          <IconButton className="icon">
            <Add />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
