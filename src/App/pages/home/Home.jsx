import React from "react";

import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import Mails from "../../components/Mails/Mails";

import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className="home__body">
        <Sidebar />
        <Mails />
      </div>
    </div>
  );
};

export default Home;
