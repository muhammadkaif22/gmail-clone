import React from "react";

import { Checkbox, IconButton, Tooltip, Zoom } from "@mui/material";
import { StarBorder, GppMaybeOutlined } from "@mui/icons-material";

import "./message.css";

const Message = ({ id, body, subject, username }) => {
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

        <span className="message__username">{username}</span>
      </div>
      <div className="message__center">
        <h5>{subject}</h5>
        <p>{body}</p>
      </div>
      <div className="message__right">
        <h4>11:02 pm</h4>
      </div>
    </div>
  );
};

export default Message;
