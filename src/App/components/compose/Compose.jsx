import React, { useState } from "react";

import { Close } from "@mui/icons-material";
import { OpenAndCloseopenComposeMail } from "../../Redux/features/AllGlobalStates";
import { useDispatch } from "react-redux";
import { Button, TextField, Autocomplete } from "@mui/material";

import "./compose.css";

const Compose = () => {
  const [options, setoptions] = useState([
    "Primary",
    "Social",
    "Promotions",
    "Updates",
  ]);
  const [inputValue, setInputValue] = React.useState("");
  const [categroy, setcategroy] = useState(options[0]);
  const dispatch = useDispatch();

  console.log(categroy);

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
          <input type="text" placeholder="Recipients" />
        </div>
        <div className="compose__inputFld">
          <input type="text" placeholder="subject" />
        </div>
        <div className="compose__inputFld">
          <textarea className="textarea"></textarea>
        </div>
      </div>

      <div className="compose__footer">
        <Button
          variant="contained"
          size="medium"
          style={{ textTransform: "capitalize" }}
        >
          send{" "}
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
