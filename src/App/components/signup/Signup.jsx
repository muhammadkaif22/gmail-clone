import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useSelector, useDispatch } from "react-redux";
import { selectLoadingState } from "../../Redux/features/AllGlobalStates";
import {
  CloseSignUp,
  setloadingTrue,
  setloadingFalse,
} from "../../Redux/features/AllGlobalStates";
import RandomLoadingTime from "../../helperFuntiions/RamdomLoadingTimeing";
import { auth } from "../../backend/firebase/config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import "./signup.css";

const Signup = () => {
  const Loading = useSelector(selectLoadingState);
  const dispatch = useDispatch();
  const [showpassword, setshowpassword] = useState(false);

  let [userdeltails, setuserdeltails] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  let [errors, seterrors] = useState({
    firstname: { state: false, msg: "" },
    lastname: { state: false, msg: "" },
    email: { state: false, msg: "" },
    password: { state: false, msg: "" },
  });

  console.log(errors);

  const SigninNow = () => {
    dispatch(setloadingTrue());
    setTimeout(() => {
      dispatch(CloseSignUp());
      dispatch(setloadingFalse());
    }, RandomLoadingTime());
  };

  const SignUpTheUser = () => {
    if (
      userdeltails.firstname.length > 2 &&
      userdeltails.lastname.length > 2 &&
      userdeltails.email.length > 7 &&
      userdeltails.password.length > 7 &&
      userdeltails.password == userdeltails.confirmPassword
    ) {
      try {
        dispatch(setloadingTrue());
        setTimeout(async () => {
          await createUserWithEmailAndPassword(
            auth,
            userdeltails.email,
            userdeltails.password
          );
          await updateProfile(auth.currentUser, {
            displayName: `${userdeltails.firstname} ${userdeltails.lastname}`,
          });
          dispatch(setloadingFalse());
          dispatch(CloseSignUp());
        }, RandomLoadingTime());
      } catch (err) {
        alert(err.message);
      }
    } else {
      seterrors({
        firstname: {
          state: true,
          msg:
            userdeltails.firstname.length == false
              ? "This input cant be black"
              : seterrors({ firstname: { state: false, msg: "" } }),
        },
        lastname: {
          state: true,
          msg:
            userdeltails.lastname.length == false
              ? "This input cant be black"
              : seterrors({ lastname: { state: false, msg: "" } }),
        },
        email: {
          state: true,
          msg:
            userdeltails.email.length == false
              ? "The Email is Required"
              : userdeltails.email.length < 10
              ? "Please write the corrent email"
              : seterrors({ email: { state: false, msg: "" } }),
        },
        password: {
          state: true,
          msg:
            userdeltails.password.length == false
              ? "The password is Required"
              : userdeltails.password.length < 7
              ? "Your Password must be upto 8 charates or numbers"
              : userdeltails.password !== userdeltails.confirmPassword
              ? "The Password did not match to each other try again"
              : seterrors({ password: { state: false, msg: "" } }),
        },
      });
    }
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
                  helperText={errors.firstname?.state && errors.firstname?.msg}
                  error={errors.firstname?.state ? true : false}
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
                  helperText={errors.lastname?.state && errors.lastname?.msg}
                  error={errors.lastname?.state ? true : false}
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
                  helperText={errors.email?.state && errors.email?.msg}
                  error={errors.email?.state ? true : false}
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
                  id="demo-helper-text-aligned"
                  label="Confirm Password"
                  type={showpassword ? "text" : "password"}
                  className="input"
                  onChange={(e) =>
                    setuserdeltails({
                      ...userdeltails,
                      confirmPassword: e.target.value,
                    })
                  }
                />
              </div>
              <p className="passwordHypertxt">
                {errors.password?.state && errors.password?.msg}
              </p>
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
                onClick={SignUpTheUser}
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
