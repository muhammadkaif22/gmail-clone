import React from "react";

import MenuIcon from "@mui/icons-material/Menu";

import {
  Search,
  HelpOutline,
  Settings,
  Apps,
  CameraAltOutlined,
  PersonAddAlt1Outlined,
} from "@mui/icons-material";

import {
  Avatar,
  Badge,
  Box,
  Menu,
  Divider,
  IconButton,
  Tooltip,
  Button,
} from "@mui/material";

import { useDispatch } from "react-redux";
import { OpenAndCloseSidebar } from "../../Redux/features/AllGlobalStates";

import { auth } from "../../backend/firebase/config";
import { selectUser } from "../../Redux/features/UserSilce";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";

import "./header.css";

const Header = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

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
        <IconButton
          className="icon"
          onClick={() => dispatch(OpenAndCloseSidebar())}
        >
          <MenuIcon />
        </IconButton>

        <div className="header__logo">
          <img src="../images/gmailLogo.svg" />
        </div>
      </div>

      <div className="header__center">
        <form>
          <IconButton className="icon">
            <Search />
          </IconButton>

          <input placeholder="Search Mail" />
        </form>
      </div>

      <div className="header__right">
        <IconButton className="icon">
          <HelpOutline />
        </IconButton>

        <IconButton className="icon">
          <Settings />
        </IconButton>

        <IconButton className="icon">
          <Apps />
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
                      <CameraAltOutlined className="icon" />
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
                <PersonAddAlt1Outlined className="icon" />
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
