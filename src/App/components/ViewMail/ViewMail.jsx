import { useEffect, useState } from "react";

import {
  ArrowBack,
  Delete,
  ArrowBackIosNew,
  ArrowForwardIos,
  Reply,
  Forward,
} from "@mui/icons-material";

import { Avatar, Button, IconButton, CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import {
  selectMailURL,
  selectRecivedMails,
} from "../../Redux/features/MailsSlice";
import { selectCurrentActiveMailOption } from "../../Redux/features/AllGlobalStates";
import { selectUser } from "../../Redux/features/UserSilce";

import { db } from "../../backend/firebase/config";
import { doc, onSnapshot, deleteDoc } from "firebase/firestore";

import "./viewmail.css";

const ViewMail = () => {
  const user = useSelector(selectUser);
  const [viewMailData, setviewMailData] = useState([]);
  const MailUrl = useSelector(selectMailURL);
  const recivedMails = useSelector(selectRecivedMails);
  const activeMailOption = useSelector(selectCurrentActiveMailOption);
  const navigate = useNavigate();

  useEffect(() => {
    if (MailUrl) {
      const unsub = onSnapshot(
        doc(db, "RecivedMails", MailUrl?.recipients, "mails", MailUrl?.id),
        (data) => {
          setviewMailData(data.data());
        }
      );
      return () => unsub();
    }
  }, [MailUrl]);

  const DeleteTheMail = async () => {
    if (MailUrl) {
      navigate("/");
      await deleteDoc(
        doc(db, "RecivedMails", MailUrl?.recipients, "mails", MailUrl.id)
      );
      await deleteDoc(doc(db, "SendMails", user?.email, "mails", MailUrl.id));
    }
  };

  return (
    <div className="viewMails">
      <div className="viewMails__header">
        <div className="header__left">
          <IconButton className="icon" onClick={() => navigate("/")}>
            <ArrowBack />
          </IconButton>

          <IconButton className="icon" onClick={DeleteTheMail}>
            <Delete />
          </IconButton>
        </div>
        <div className="header__right">
          <span>{recivedMails.length}</span>

          <IconButton className="icon">
            <ArrowBackIosNew />
          </IconButton>

          <IconButton className="icon">
            <ArrowForwardIos />
          </IconButton>
        </div>
      </div>

      {/* body */}
      <div className="viewMails__body">
        <h3 className="body__subject">{viewMailData?.subject}</h3>
        <div className="body__top">
          <div className="top__userinfo">
            <Avatar
              alt={viewMailData?.senderName}
              src={viewMailData?.senderProfile}
            />
            <span>
              <h5>{viewMailData?.senderName}</h5>
              <p>{`<${viewMailData?.sender}>`}</p>
            </span>
          </div>
          <div className="top__time">
            <p>{new Date(viewMailData?.time?.toDate()).toUTCString()}</p>
          </div>
        </div>
        <div className="body__mainContent">
          <p className="mainContent__content">{viewMailData?.body}</p>
        </div>
        <div className="body__footer">
          <Button variant="outlined" size="large" className="footer__btn">
            <Reply className="icon" />
            <p>Reply</p>
          </Button>
          <Button variant="outlined" size="large" className="footer__btn">
            <Forward className="icon" />
            <p>Forward</p>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ViewMail;
