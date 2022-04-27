import React from "react";

import { Checkbox, IconButton, Tooltip, Zoom } from "@mui/material";
import { StarBorder, GppMaybeOutlined } from "@mui/icons-material";

import "./message.css";

const Message = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <div className="message">
      <div className="message__left">
        <Checkbox {...label} />

        <Tooltip TransitionComponent={Zoom} title="Started">
          <IconButton className="icon" size="small">
            <StarBorder />
          </IconButton>
        </Tooltip>

        <Tooltip TransitionComponent={Zoom} title="Improtant">
          <IconButton className="icon" size="small">
            <GppMaybeOutlined />
          </IconButton>
        </Tooltip>

        <span className="message__username">kaif ali</span>
      </div>
      <div className="message__center">
        <h5>learn english from home</h5>
        <p>
          Lorem ipsum dolor, sit amet consectetur dolor, sit amet consecteturt
          amet consectetur dolor, sit amet consectetur
        </p>
      </div>
      <div className="message__right">
        <h4>11:02 pm</h4>
      </div>
    </div>
  );
};

export default Message;
