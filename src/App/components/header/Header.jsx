import React from "react";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import AppsIcon from "@mui/icons-material/Apps";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import PersonAddAlt1OutlinedIcon from "@mui/icons-material/PersonAddAlt1Outlined";

import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

import { auth } from "../../backend/firebase/config";
import { selectUser } from "../../Redux/features/UserSilce";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";

import "./header.css";
import { Button } from "@mui/material";

const Header = () => {
  const user = useSelector(selectUser);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const SignTheUser = () => signOut(auth);

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

        <>
          <Box
            sx={{ display: "flex", alignItems: "center", textAlign: "center" }}
          >
            <Tooltip title="Account settings">
              <IconButton
                size="small"
                onClick={handleClick}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <Avatar
                  alt={user?.displayName}
                  style={{ cursor: "pointer" }}
                  src={user?.photoURL}
                />
              </IconButton>
            </Tooltip>
          </Box>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 3px rgba(0,0,0,0.32))",
                width: 330,
                height: 400,
                mt: 2.5,
                "& .MuiAvatar-root": {
                  width: 45,
                  height: 45,
                  ml: -0.5,
                  mr: 1,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <div className="menu__container">
              <div className="menu__top">
                <Badge
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  badgeContent={
                    <div className="menu__badge">
                      <CameraAltOutlinedIcon className="icon" />
                    </div>
                  }
                >
                  <Avatar
                    style={{ cursor: "pointer" }}
                    src={user?.photoURL}
                    alt={user?.displayName}
                    className="menu__profile"
                  />
                </Badge>

                <p className="menu__userEmail">{user?.email}</p>

                <span className="menu__manageAccount">
                  Manage your google account
                </span>
              </div>

              <Divider />

              <div className="menu__addAccount">
                <PersonAddAlt1OutlinedIcon className="icon" />
                <p>Add another account</p>
              </div>

              <Divider />

              <div className="menu__btn">
                <Button
                  variant="outlined"
                  className="menu__signoutBtn"
                  onClick={SignTheUser}
                >
                  Sign Out
                </Button>
              </div>

              <Divider />

              <div className="menu__footer">
                <p>Privacy policy</p>
                <span></span>
                <p>Terms of service</p>
              </div>
            </div>
          </Menu>
        </>
      </div>
    </header>
  );
};

export default Header;
