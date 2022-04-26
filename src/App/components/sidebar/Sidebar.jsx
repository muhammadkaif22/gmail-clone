import React from "react";

import SidebarOptions from "./SidebarOptions";

import { Videocam, Keyboard, Add } from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";

import { selectOpensidebarState } from "../../Redux/features/AllGlobalStates";
import { useSelector } from "react-redux";

import "./sidebar.css";

const Sidebar = () => {
  const openSidebar = useSelector(selectOpensidebarState);

  return (
    <div className={`sidebar ${openSidebar && "active"}`}>
      <div className="sidebar__top">
        <button className="sidebar__composeBtn">
          <img src="https://www.gstatic.com/images/icons/material/colored_icons/2x/create_32dp.png" />
          <span>compose</span>
        </button>
      </div>

      <div className="sidebar__optionsContainer">
        <SidebarOptions />
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
              alt="Remy Sharp"
              src="/broken-image.jpg"
              className="userprofile__profile"
              style={{ cursor: "pointer" }}
            />
            <p>hunter</p>
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
