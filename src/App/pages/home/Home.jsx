import React from "react";

import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import Compose from "../../components/compose/Compose";

import { selectComposeMail } from "../../Redux/features/AllGlobalStates";
import { useSelector } from "react-redux";

import "./home.css";

const Home = () => {
  const iscomposeMailOpen = useSelector(selectComposeMail);

  console.log("Is is compose valur", iscomposeMailOpen);

  return (
    <div className="home">
      <Header />
      <div className="home__body">
        <Sidebar />
        {iscomposeMailOpen && <Compose />}
      </div>
    </div>
  );
};

export default Home;
