import React from "react";

import { Checkbox, IconButton, Tooltip, Zoom } from "@mui/material";
import { StarBorder, GppMaybeOutlined } from "@mui/icons-material";
import { db } from "../../backend/firebase/config";
import { updateDoc, doc } from "firebase/firestore";
import { Navigate, useNavigate } from "react-router-dom";

import "./message.css";

const Message = ({
  id,
  body,
  subject,
  username,
  user,
  readMassges,
  activeMail,
  time,
}) => {
  const navigate = useNavigate();
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const ReadMsgFun = async () => {
    navigate("/viewmail");
    try {
      if (activeMail == "inbox") {
        await updateDoc(doc(db, "RecivedMails", user?.email, "mails", id), {
          read: true,
        });
      }
      if (activeMail == "send") {
        await updateDoc(doc(db, "SendMails", user?.email, "mails", id), {
          read: true,
        });
      }
    } catch (err) {
      alert(err.Message);
    }
  };

  return (
    <div
      className={`message ${readMassges && "Message_read"}`}
      onClick={ReadMsgFun}
    >
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
        <h4>{new Date(time?.toDate()).toUTCString()}</h4>
      </div>
    </div>
  );
};

export default Message;
