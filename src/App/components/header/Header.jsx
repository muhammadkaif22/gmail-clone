import React from "react";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import AppsIcon from "@mui/icons-material/Apps";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";

import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__left">
        <IconButton className="icon">
          <MenuIcon />
        </IconButton>

        <div className="header__logo">
          <img src="../images/gmailLogo.svg" />
        </div>
      </div>

      <div className="header__center">
        <form>
          <IconButton className="icon">
            <SearchIcon />
          </IconButton>

          <input placeholder="Search Mail" />
        </form>
      </div>

      <div className="header__right">
        <IconButton className="icon">
          <HelpOutlineIcon />
        </IconButton>

        <IconButton className="icon">
          <SettingsIcon />
        </IconButton>

        <IconButton className="icon">
          <AppsIcon />
        </IconButton>

        <IconButton size="small">
          <Avatar
            alt="Remy Sharp"
            style={{ cursor: "pointer" }}
            src="/broken-image.jpg"
          />
        </IconButton>
      </div>
    </header>
  );
};

export default Header;
