import React from "react";

import {
  ArrowBack,
  Delete,
  ArrowBackIosNew,
  ArrowForwardIos,
  Reply,
  Forward,
} from "@mui/icons-material";

import { Avatar, Button, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./viewmail.css";

const ViewMail = () => {
  const navigate = useNavigate();
  return (
    <div className="viewMails">
      <div className="viewMails__header">
        <div className="header__left">
          <IconButton className="icon" onClick={() => navigate("/")}>
            <ArrowBack />
          </IconButton>

          <IconButton className="icon">
            <Delete />
          </IconButton>
        </div>
        <div className="header__right">
          <span>55</span>

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
        <h3 className="body__subject">hello world</h3>
        <div className="body__top">
          <div className="top__userinfo">
            <Avatar alt="Remy Sharp" src="/broken-image.jpg" />
            <span>
              <h5>kaif ali</h5>
              <p>kaifjhon@gmail.com</p>
            </span>
          </div>
          <div className="top__time">
            <p>11:50pm</p>
          </div>
        </div>
        <div className="body__mainContent">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
            quasi alias laboriosam qui numquam accusantium porro magnam
            voluptatum esse eum praesentium non nam, quo, nesciunt accusamus
            maxime fugit voluptatem fugiat quos rerum animi, ut necessitatibus?
            Accusantium aspernatur velit praesentium est officiis, sint porro
            facere enim cupiditate explicabo quas consequatur repellat iure,
            harum qui soluta earum tempore non rem doloribus sapiente modi neque
            temporibus et? Totam temporibus rerum aspernatur in sequi, quae
            ipsam qui quasi quia iure labore suscipit veritatis dolorem harum
            tempora? Et eum odit, non pariatur blanditiis porro eius, sit modi
            esse dolorem fugiat! Nulla sed perspiciatis blanditiis hic? Ipsa
            magni nisi, quae dignissimos error enim pariatur sapiente sint quasi
            tempore exercitationem. Facilis accusamus culpa sequi quae
            doloremque ratione nihil sapiente natus numquam perferendis corrupti
            consectetur eos est officiis laboriosam minus vero laborum,
            obcaecati voluptatum eius repellat? Rerum numquam assumenda magnam.
            Nulla aliquid esse, temporibus sed harum perspiciatis voluptatem
            voluptas? Perspiciatis tempore excepturi unde earum cumque dolore id
            facere! Aliquam sapiente impedit placeat doloribus suscipit animi
            repellendus velit cupiditate expedita, exercitationem quis molestiae
            nesciunt iste nostrum commodi ratione necessitatibus voluptates?
            Cum, est quisquam quasi rerum minus alias ipsa ipsam assumenda ex,
            autem provident blanditiis, modi error in tenetur veritatis?
          </p>
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
