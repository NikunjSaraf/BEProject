import React, { useEffect, useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";
import { CircularProgress } from "@material-ui/core";
import firebase from "./config/fire";
import Profile from "./components/Profile";
import Account from "./components/Account";
import SurveyTest from "./test/survey-test/SurveyTest";
import Test from "./test/survey-test/Test";

function App() {
  const [firebaseInitialized, setFirebaseInitialized] = useState(false);

  useEffect(() => {
    firebase.isInitialized().then(val => {
      setFirebaseInitialized(val);
    });
  });
  return firebaseInitialized !== false ? (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact={true} component={Nav}></Route>
          <Route path="/auth/login" exact={true} component={Login}></Route>
          <Route path="/auth/signup" exact={true} component={SignUp}></Route>
          <Route path="/dashboard" exact={true} component={Dashboard}></Route>
          <Route
            path="/manage-profile"
            exact={true}
            component={Profile}
          ></Route>
          <Route
            path="/manage-account"
            exact={true}
            component={Account}
          ></Route>
          <Route
            path="/test/survey/survey-test"
            exact={true}
            component={SurveyTest}
          ></Route>
          <Route
            path="/test/survey/survey-test/test"
            exact={true}
            component={Test}
          ></Route>
        </Switch>
      </Router>
    </div>
  ) : (
    <div id="loader">
      <CircularProgress />
    </div>
  );
}
export default App;
