import { useState } from "react";
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
  CloseSignUp,
  setloadingTrue,
  setloadingFalse,
} from "../../Redux/features/AllGlobalStates";
import RandomLoadingTime from "../../helperFuntiions/RamdomLoadingTimeing";

import "./signup.css";

const Signup = () => {
  const openSignup = useSelector(selectOpenSignupState);
  const Loading = useSelector(selectLoadingState);
  const dispatch = useDispatch();
  const [showpassword, setshowpassword] = useState(false);
  let [userdeltails, setuserdeltails] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const SigninNow = () => {
    dispatch(setloadingTrue());
    setTimeout(() => {
      dispatch(CloseSignUp());
      dispatch(setloadingFalse());
    }, RandomLoadingTime());
  };

  return (
    <>
      <div className={`overlay ${Loading && "active"}`} />
      <div className="signup">
        <div className="signup__wapper">
          <div className={`loadingbar ${Loading && "active"}`} />

          <div className="signup__top">
            <div className="top__logoWapper">
              <img src="../images/google.svg" />
            </div>
            <h4>Create your Google Account</h4>
            <span>Continue to Gmail</span>
          </div>

          <div className="signup__body">
            <form>
              <div className="inputFlds">
                <TextField
                  //   helperText="Please enter your name"
                  id="demo-helper-text-aligned"
                  label="Fist Name"
                  type="text"
                  className="input"
                  onChange={(e) =>
                    setuserdeltails({
                      ...userdeltails,
                      firstname: e.target.value,
                    })
                  }
                />
                <TextField
                  //   helperText="Please enter your name"
                  id="demo-helper-text-aligned"
                  label="Last Name"
                  type="text"
                  className="input"
                  onChange={(e) =>
                    setuserdeltails({
                      ...userdeltails,
                      lastname: e.target.value,
                    })
                  }
                />
              </div>
              <div className="inputFlds">
                <TextField
                  //   helperText="Please enter your name"
                  id="demo-helper-text-aligned"
                  label="Email"
                  type="email"
                  className="input"
                  onChange={(e) =>
                    setuserdeltails({
                      ...userdeltails,
                      email: e.target.value,
                    })
                  }
                />
              </div>
              <div className="inputFlds">
                <TextField
                  //   helperText="Please enter your name"
                  id="demo-helper-text-aligned"
                  label="Password"
                  type={showpassword ? "text" : "password"}
                  className="input"
                  onChange={(e) =>
                    setuserdeltails({
                      ...userdeltails,
                      password: e.target.value,
                    })
                  }
                />
                <TextField
                  //   helperText="Please enter your name"
                  id="demo-helper-text-aligned"
                  label="Confirm Password"
                  type={showpassword ? "text" : "password"}
                  className="input"
                />
              </div>
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

            <div className="signup__buttons">
              <Button
                variant="text"
                size="medium"
                style={{ textTransform: "capitalize" }}
                onClick={SigninNow}
              >
                Sign in instead
              </Button>
              <Button
                variant="contained"
                size="medium"
                style={{ textTransform: "capitalize" }}
              >
                Create
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
