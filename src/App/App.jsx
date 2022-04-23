import React from "react";
import Home from "./Home";
import { selectUser } from "./Redux/features/UserSilce";
import { useSelector } from "react-redux";
import Signin from "./components/signin/Signin";

const App = () => {
  const user = useSelector(selectUser);
  return <div className="App">{user ? <Home /> : <Signin />}</div>;
};

export default App;
