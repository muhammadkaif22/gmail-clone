import { useEffect } from "react";
import Home from "./Home";
import { selectUser } from "./Redux/features/UserSilce";
import { signin, signOut } from "./Redux/features/UserSilce";
import { useDispatch, useSelector } from "react-redux";
import Signin from "./components/signin/Signin";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./backend/firebase/config";

const App = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        dispatch(signin(authUser));
      } else {
        dispatch(signOut());
      }
    });

    return () => unsub();
  }, [user]);

  console.log(user);

  return <div className="App">{user ? <Home /> : <Signin />}</div>;
};

export default App;
