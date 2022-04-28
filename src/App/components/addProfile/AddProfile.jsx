import { Button } from "@mui/material";
import React, { useState } from "react";

import { storage } from "../../backend/firebase/config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { updateProfile } from "firebase/auth";
import { selectUser } from "../../Redux/features/UserSilce";
import { OpenAndCloseopenOpenAddPhotoURL } from "../../Redux/features/AllGlobalStates";
import { useSelector, useDispatch } from "react-redux";

import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import CircularProgress from "@mui/material/CircularProgress";

import "./addprofile.css";

const AddProfile = () => {
  const user = useSelector(selectUser);
  const [userProfile, setuserProfile] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const GetTheProfile = (e) => {
    if (e.target.files[0]) {
      setuserProfile(e.target.files[0]);
    }
  };

  const UpdateTheProfile = async () => {
    setLoading(true);
    const storageRef = ref(storage, `userProfiles${user?.uid}.png`);
    const uploadTask = await uploadBytes(storageRef, userProfile);
    const URL = await getDownloadURL(storageRef);
    await updateProfile(user, { photoURL: URL });
    setLoading(false);
    dispatch(OpenAndCloseopenOpenAddPhotoURL());
  };

  return (
    <div className="addProfile">
      <div className="addProfile__Wapper">
        <IconButton
          className="icon"
          onClick={() => dispatch(OpenAndCloseopenOpenAddPhotoURL())}
        >
          <CloseIcon />
        </IconButton>

        <div className="wapper__imageViwer">
          <img
            src={
              userProfile ? URL.createObjectURL(userProfile) : user?.photoURL
            }
          />
        </div>

        <div className="wapper__SelectProfilebtn">
          <label htmlFor="selectprofileBtn">Select Profile</label>
          <input
            type="file"
            id="selectprofileBtn"
            style={{ visibility: "hidden" }}
            accept="image/*"
            onChange={GetTheProfile}
          />
        </div>

        <Button
          variant="contained"
          size="large"
          className="wapper__doneBtn"
          onClick={UpdateTheProfile}
        >
          {loading ? (
            <CircularProgress
              color="inherit"
              style={{ width: "30px", height: "30px" }}
            />
          ) : (
            "Done"
          )}
        </Button>
      </div>
    </div>
  );
};

export default AddProfile;
