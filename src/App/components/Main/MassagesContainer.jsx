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
  setInboxTotalMails,
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

  // total unread mails
  const [primarymails, setprimarymails] = useState(0);
  const [socialmails, setsocialmails] = useState(0);
  const [promotionsmails, setpromotionsmails] = useState(0);
  const [updatesmails, setupdatesmails] = useState(0);

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

  useEffect(() => {
    if (currentCategroy == "primary") {
      let sortedMails = recivedMails.filter((e) => {
        return e.categroy == "Primary";
      });

      dispatch(setonScreenMail(sortedMails));
    }

    if (currentCategroy == "social") {
      let sortedMails = recivedMails.filter((e) => {
        return e.categroy == "Social";
      });

      dispatch(setonScreenMail(sortedMails));
    }

    if (currentCategroy == "promotions") {
      let sortedMails = recivedMails.filter((e) => {
        return e.categroy == "Promotions";
      });

      dispatch(setonScreenMail(sortedMails));
    }

    if (currentCategroy == "updates") {
      let sortedMails = recivedMails.filter((e) => {
        return e.categroy == "Updates";
      });

      dispatch(setonScreenMail(sortedMails));
    }
  }, [recivedMails, currentCategroy]);

  useEffect(() => {
    if (activeMail == "inbox") {
      let totalMailindex = recivedMails.filter((e) => {
        return e.read === false;
      });
      dispatch(setInboxTotalMails(totalMailindex.length));

      let primarymail = totalMailindex.filter((e) => {
        return e.categroy === "Primary";
      });
      setprimarymails(primarymail.length);

      let socialmail = totalMailindex.filter((e) => {
        return e.categroy === "Social";
      });
      setsocialmails(socialmail.length);

      let promotionsmail = totalMailindex.filter((e) => {
        return e.categroy == "Promotions";
      });
      setpromotionsmails(promotionsmail.length);

      let updatemail = totalMailindex.filter((e) => {
        return e.categroy == "Updates";
      });
      setupdatesmails(updatemail.length);
    }
  }, [recivedMails]);

  return (
    <div className="main__MessageContainer">
      {activeMail === "inbox" && (
        <div className="MessageContainer__tabs">
          {/* tabs */}
          <div
            className={`tab ${currentCategroy === "primary" && "primary"}`}
            onClick={() => dispatch(setCurrentMailcategroy("primary"))}
          >
            <Inbox className="icon" />
            <p>Primary</p>
            <span className="unreadMsg primary">{primarymails} new</span>
          </div>

          <div
            className={`tab ${currentCategroy === "social" && "social"}`}
            onClick={() => dispatch(setCurrentMailcategroy("social"))}
          >
            <People className="icon" />
            <p>Social</p>
            <span className="unreadMsg social">{socialmails} new</span>
          </div>

          <div
            className={`tab ${
              currentCategroy === "promotions" && "promotions"
            }`}
            onClick={() => dispatch(setCurrentMailcategroy("promotions"))}
          >
            <LocalOffer className="icon" />
            <p>Promotions</p>
            <span className="unreadMsg promotions">{promotionsmails} new</span>
          </div>

          <div
            className={`tab ${currentCategroy === "updates" && "updates"}`}
            onClick={() => dispatch(setCurrentMailcategroy("updates"))}
          >
            <MobileFriendly className="icon" />
            <p>Updates</p>
            <span className="unreadMsg updates">{updatesmails} new</span>
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
