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

const routing = (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={Login} exact />
        <PrivateRouter path="/main" component={Main} />
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
serviceWorker.unregister();
