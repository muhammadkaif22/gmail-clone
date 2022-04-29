import { useState, useEffect } from "react";

import Message from "./Message";

import { Inbox, People, LocalOffer, MobileFriendly } from "@mui/icons-material";

import { selectUser } from "../../Redux/features/UserSilce";

import {
  selectCurrentMailcategroy,
  setCurrentMailcategroy,
  selectCurrentActiveMailOption,
} from "../../Redux/features/AllGlobalStates";

import {
  selectRecivedMails,
  selectonScreenMail,
  setRecivedMails,
  setonScreenMail,
} from "../../Redux/features/MailsSlice";

import { db } from "../../backend/firebase/config";
import { collection, orderBy, query, onSnapshot } from "firebase/firestore";

import { useSelector, useDispatch } from "react-redux";

const MassagesContainer = () => {
  const user = useSelector(selectUser);
  const currentCategroy = useSelector(selectCurrentMailcategroy);
  const recivedMails = useSelector(selectRecivedMails);
  const onScreenMail = useSelector(selectonScreenMail);
  const activeMail = useSelector(selectCurrentActiveMailOption);
  const dispatch = useDispatch();

  useEffect(() => {
    if (activeMail == "inbox") {
      const collectionRef = collection(
        db,
        "RecivedMails",
        user?.email,
        "mails"
      );
      const q = query(collectionRef);
      const display = onSnapshot(q, (snapshot) => {
        dispatch(setRecivedMails(snapshot.docs.map((data) => data.data())));
      });
    }
    if (activeMail == "send") {
      const collectionRef = collection(db, "SendMails", user?.email, "mails");
      const q = query(collectionRef);
      const display = onSnapshot(q, (snapshot) => {
        dispatch(setRecivedMails(snapshot.docs.map((data) => data.data())));
      });
    }
  }, [recivedMails]);

  useEffect(() => {
    dispatch(setonScreenMail(recivedMails));
  }, [recivedMails]);

  return (
    <div className="main__MessageContainer">
      {activeMail == "inbox" && (
        <div className="MessageContainer__tabs">
          {/* tabs */}
          <div
            className={`tab ${currentCategroy == "primary" && "primary"}`}
            onClick={() => dispatch(setCurrentMailcategroy("primary"))}
          >
            <Inbox className="icon" />
            <p>Primary</p>
            <span className="unreadMsg primary">5 new</span>
          </div>

          <div
            className={`tab ${currentCategroy == "social" && "social"}`}
            onClick={() => dispatch(setCurrentMailcategroy("social"))}
          >
            <People className="icon" />
            <p>Social</p>
            <span className="unreadMsg social">5 new</span>
          </div>

          <div
            className={`tab ${currentCategroy == "promotions" && "promotions"}`}
            onClick={() => dispatch(setCurrentMailcategroy("promotions"))}
          >
            <LocalOffer className="icon" />
            <p>Promotions</p>
            <span className="unreadMsg promotions">5 new</span>
          </div>

          <div
            className={`tab ${currentCategroy == "updates" && "updates"}`}
            onClick={() => dispatch(setCurrentMailcategroy("updates"))}
          >
            <MobileFriendly className="icon" />
            <p>Updates</p>
            <span className="unreadMsg updates">5 new</span>
          </div>
        </div>
      )}

      {/* messages */}
      <div className="main__messages">
        {onScreenMail.map((data, index) => {
          return (
            <Message
              key={index}
              user={user}
              id={data?.id}
              body={data?.body}
              subject={data?.subject}
              username={data?.senderName}
              readMassges={data?.read}
              activeMail={activeMail}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MassagesContainer;
