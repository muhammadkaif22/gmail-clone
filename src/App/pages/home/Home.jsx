import React from "react";

import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import Compose from "../../components/compose/Compose";
import Main from "../../components/Main/Main";
import AddProfile from "../../components/addProfile/AddProfile";
import ViewMail from "../../components/ViewMail/ViewMail";

import { Routes, Route } from "react-router-dom";
import {
  selectComposeMail,
  selectOpenAddPhotoURL,
} from "../../Redux/features/AllGlobalStates";
import { useSelector } from "react-redux";

import "./home.css";

const Home = () => {
  const iscomposeMailOpen = useSelector(selectComposeMail);
  const isAddProfileOpen = useSelector(selectOpenAddPhotoURL);
  return (
    <div className="home">
      <Header />
      <div className="home__body">
        <Sidebar />
        {isAddProfileOpen && <AddProfile />}
        {iscomposeMailOpen && <Compose />}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/viewmail" element={<ViewMail />} />
        </Routes>
      </div>
    </div>
  );
};

export default Home;
