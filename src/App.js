import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

//react-router
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

//firebase
// import firebase from "firebase";
// import "firebase/auth";

//components
import Home from "./Pages/Home";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import PageNotFound from "./Pages/PageNotFound";
import { UserContext } from "./context/UserContext";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

// import firebaseConfig from "./Config/firebaseConfig";
//init firebase
// firebase.initializeApp(firebaseConfig);

export default function App() {
  const [user, setUser] = useState(null);

  const styleLink = document.createElement("link");
  styleLink.rel = "stylesheet";
  styleLink.href =
    "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
  document.head.appendChild(styleLink);

  const router = (
    <Router>
      <UserContext.Provider value={{ user, setUser }}>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="*" component={PageNotFound} />
        </Switch>
      </UserContext.Provider>
    </Router>
  );

  return (
    <div className="App">
      {router}
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
