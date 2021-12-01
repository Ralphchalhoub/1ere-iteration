import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.10.0";

// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import AboutPage from "views/AboutPage/AboutPage.js";
import BagPage from "views/BagPage/BagPage.js";
import registerPage from "views/registerPage/register";
import shirtspage from "views/shirtspage/shirts";
import dressespage from "views/dressespage/dresses";
import shoespage from "views/shoespage/shoes";
import { createStore } from "redux";
import allreducers from "store/reducers";
import { Provider } from "react-redux";

var hist = createBrowserHistory();
const store = createStore(
  allreducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={hist}>
      <Switch>
        <Route path="/landing-page" component={LandingPage} />
        <Route path="/profile-page" component={ProfilePage} />
        <Route path="/login-page" component={LoginPage} />
        <Route path="/about-page" component={AboutPage} />
        <Route path="/bag-page" component={BagPage} />
        <Route path="/shirts-page" component={shirtspage} />
        <Route path="/dresses-page" component={dressespage} />
        <Route path="/shoes-page" component={shoespage} />
        <Route path="/register-page" component={registerPage} />
        <Route path="/" component={Components} />
      </Switch>
    </Router>
    ,
  </Provider>,
  document.getElementById("root")
);
