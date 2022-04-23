import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useSelector, useDispatch } from "react-redux";

import {
  selectOpenSignupState,
  selectLoadingState,
} from "../../Redux/features/AllGlobalStates";
import {
  OpenSignUp,
  setloadingTrue,
  setloadingFalse,
} from "../../Redux/features/AllGlobalStates";
import SignUp from "../signup/Signup";
import RandomLoadingTime from "../../helperFuntiions/RamdomLoadingTimeing";
import { auth } from "../../backend/firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";

import "./signin.css";

const Signin = () => {
  const openSignup = useSelector(selectOpenSignupState);
  const Loading = useSelector(selectLoadingState);
  const dispatch = useDispatch();
  const [showpassword, setshowpassword] = useState(false);

  let [userdeltails, setuserdeltails] = useState({
    email: "",
    password: "",
  });

  const OpenSingupSec = () => {
    dispatch(setloadingTrue());
    setTimeout(() => {
      dispatch(OpenSignUp());
      dispatch(setloadingFalse());
    }, RandomLoadingTime());
  };

  const SignInTheUser = () => {
    dispatch(setloadingTrue());
    setTimeout(async () => {
      await signInWithEmailAndPassword(
        auth,
        userdeltails.email,
        userdeltails.password
      );
      dispatch(setloadingFalse());
    }, RandomLoadingTime());
  };

  return (
    <>
      {openSignup ? (
        <SignUp />
      ) : (
        <>
          <div className={`overlay ${Loading && "active"}`} />
          <div className="signin">
            <div className="signin__wapper">
              <div className={`loadingbar ${Loading && "active"}`} />
              <div className="signin__top">
                <div className="top__logoWapper">
                  <img src="../images/google.svg" />
                </div>
                <h4>sign in</h4>
                <span>continue to gmail</span>
              </div>
              <div className="sign__body">
                <form>
                  <TextField
                    //   helperText="Please enter your name"
                    id="demo-helper-text-aligned"
                    label="Email"
                    type="email"
                    className="input"
                    value={userdeltails.email}
                    onChange={(e) =>
                      setuserdeltails({
                        ...userdeltails,
                        email: e.target.value,
                      })
                    }
                  />
                  <TextField
                    id="demo-helper-text-aligned-no-helper"
                    label="Password"
                    type={showpassword ? "text" : "password"}
                    className="input"
                    value={userdeltails.password}
                    onChange={(e) =>
                      setuserdeltails({
                        ...userdeltails,
                        password: e.target.value,
                      })
                    }
                  />
                </form>

                <div className="signup__showpassword">
                  <FormControlLabel
                    style={{ userSelect: "none" }}
                    control={
                      <Checkbox
                        checked={showpassword}
                        label="Show Password"
                        onChange={(e) => setshowpassword(e.target.checked)}
                        inputProps={{ "aria-label": "controlled" }}
                      />
                    }
                    label="Show Password"
                  />
                </div>

                <span>
                  Not your computer? Use guest mode to sign in privately?{" "}
                  <a href="https://www.google.com/" target="_blank">
                    Learn More
                  </a>
                </span>

                <div className="signin__buttons">
                  <Button
                    variant="text"
                    size="medium"
                    onClick={OpenSingupSec}
                    style={{ textTransform: "capitalize" }}
                  >
                    create Account
                  </Button>
                  <Button
                    variant="contained"
                    size="medium"
                    onClick={SignInTheUser}
                  >
                    Sign in
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Signin;
