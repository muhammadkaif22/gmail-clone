import React, { useEffect, useState } from "react";

import { Close } from "@mui/icons-material";
import { OpenAndCloseopenComposeMail } from "../../Redux/features/AllGlobalStates";
import { selectUser } from "../../Redux/features/UserSilce";
import { useSelector, useDispatch } from "react-redux";
import { Button, TextField, Autocomplete } from "@mui/material";
import { v4 as uuidv4 } from "uuid";

import { db } from "../../backend/firebase/config";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";

import "./compose.css";

const Compose = () => {
  const user = useSelector(selectUser);
  const [options, setoptions] = useState([
    "primary",
    "social",
    "promotions",
    "updates",
  ]);
  const [inputValue, setInputValue] = React.useState("");
  const [categroy, setcategroy] = useState(options[0]);
  const [userDetails, setuserDetails] = useState({
    recipients: "",
    subject: "",
    body: "",
  });
  const [id, setid] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    setid(uuidv4());
  }, []);

  const createRamdomId = () => {
    setid(uuidv4());
  };

  const SendMail = async () => {
    createRamdomId();
    dispatch(OpenAndCloseopenComposeMail());
    try {
      await setDoc(doc(db, "SendMails", user?.email, "mails", id), {
        id: id,
        categroy: categroy,
        recipients: userDetails.recipients,
        subject: userDetails.subject,
        body: userDetails.body,
        sender: user?.email,
        senderName: user?.displayName,
        time: serverTimestamp(),
        read: true,
      });

      addRecivedMail();
    } catch (err) {
      alert(err.message);
    }
  };

  const addRecivedMail = async () => {
    try {
      await setDoc(
        doc(db, "RecivedMails", userDetails.recipients, "mails", id),
        {
          id: id,
          categroy: categroy,
          recipients: userDetails.recipients,
          subject: userDetails.subject,
          body: userDetails.body,
          sender: user?.email,
          senderName: user?.displayName,
          senderProfile: user?.photoURL,
          time: serverTimestamp(),
          read: false,
        }
      );
      alert("message send");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="compose">
      <div className="compose__top">
        <span>New Message</span>

        <div
          className="closebtn"
          onClick={() => dispatch(OpenAndCloseopenComposeMail())}
        >
          <Close className="icon" />
        </div>
      </div>

      <div className="compose__body">
        <div className="compose__inputFld">
          <input
            type="text"
            placeholder="Recipients"
            value={userDetails.recipients}
            onChange={(e) =>
              setuserDetails({ ...userDetails, recipients: e.target.value })
            }
          />
        </div>
        <div className="compose__inputFld">
          <input
            type="text"
            placeholder="subject"
            value={userDetails.subject}
            onChange={(e) =>
              setuserDetails({ ...userDetails, subject: e.target.value })
            }
          />
        </div>
        <div className="compose__inputFld">
          <textarea
            className="textarea"
            value={userDetails.body}
            onChange={(e) =>
              setuserDetails({ ...userDetails, body: e.target.value })
            }
          ></textarea>
        </div>
      </div>

      <div className="compose__footer">
        <Button
          variant="contained"
          size="medium"
          style={{ textTransform: "capitalize" }}
          onClick={SendMail}
        >
          send
        </Button>

        <Autocomplete
          value={categroy}
          onChange={(event: any, newValue: string | null) => {
            setcategroy(newValue);
          }}
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
          }}
          id="controllable-states-demo"
          options={options}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Select mail categroy" />
          )}
        />
      </div>
    </div>
  );
};

export default Compose;
