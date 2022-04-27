import React from "react";

import { Checkbox, IconButton, Tooltip } from "@mui/material";
import {
  Refresh,
  MoreVert,
  KeyboardArrowLeft,
  ChevronRight,
} from "@mui/icons-material";

import { selectOpensidebarState } from "../../Redux/features/AllGlobalStates";

import MassagesContainer from "./MassagesContainer";

import "./main.css";

const Main = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <div className={`main ${selectOpensidebarState && "active"}`}>
      <div className="main__header">
        <div className="header__left">
          <Checkbox {...label} />

          <IconButton className="icon">
            <Refresh />
          </IconButton>
          <IconButton className="icon">
            <MoreVert />
          </IconButton>
        </div>
        <div className="header__right">
          <span>100</span>

          <Tooltip title="Newer" placement="bottom">
            <IconButton className="icon">
              <KeyboardArrowLeft />
            </IconButton>
          </Tooltip>

          <Tooltip title="Oldest" placement="bottom">
            <IconButton className="icon">
              <ChevronRight />
            </IconButton>
          </Tooltip>
        </div>
      </div>

      <MassagesContainer />
    </div>
  );
};

export default Main;
