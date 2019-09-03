import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Main from "./components/Main/Main";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import PrivateRouter from "./components/PrivateRouter";
// import Listview from "./components/Listview/Listview";
import ChangePassword from "./components/ChangePassword/ChangePassword";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import CreateAccount from "./components/CreateAccount/CreateAccount";

const routing = (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/forgot-password" component={ForgotPassword} exact />
        <PrivateRouter path="/main" component={Main} />
        <Route path="/:token/:email" component={ChangePassword} exact />
        <Route path="/create-account" component={CreateAccount} exact />
        {/* <PrivateRouter path="/entries" component={Listview} /> */}
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);
ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.register();
