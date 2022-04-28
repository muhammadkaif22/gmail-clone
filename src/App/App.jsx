import { useEffect, useState } from "react";

import Home from "./pages/home/Home";
import Signin from "./components/signin/Signin";
import Loading from "./components/Loading/Loading";
import { RandomPageLoadingTime } from "./helperFuntiions/RamdomLoadingTimeing";

import { selectUser } from "./Redux/features/UserSilce";
import { signin, signOut } from "./Redux/features/UserSilce";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./backend/firebase/config";

const App = () => {
  const user = useSelector(selectUser);
  const [PageLoading, setPageLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        setPageLoading(true);

        setTimeout(() => {
          dispatch(signin(authUser));
          setPageLoading(false);
        }, RandomPageLoadingTime());
      } else {
        dispatch(signOut());
      }
    });

    return () => unsub();
  }, [user]);

  console.log(user);

  return (
    <div className="App">
      {user ? <Home /> : PageLoading ? <Loading /> : <Signin />}
    </div>
  );
};

export default App;
