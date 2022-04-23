import React from "react";
import { auth } from "./backend/firebase/config";
import { signOut } from "firebase/auth";

const Home = () => {
  return <button onClick={() => signOut(auth)}>sign out</button>;
};

export default Home;
