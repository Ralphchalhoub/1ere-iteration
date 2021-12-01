import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
// sections for this page
import SectionNavbars from "./Sections/SectionNavbars.js";
import SectionCarousel from "./Sections/SectionCarousel.js";
import { createStore } from "redux";
import allreducers from "../../store/reducers";
import { Provider } from "react-redux";
//import SectionLogin from "./Sections/SectionLogin.js";

import styles from "assets/jss/material-kit-react/views/components.js";
//import SectionJavascript from "./Sections/SectionJavascript.js";
import SectionTabs from "./Sections/SectionTabs.js";

const useStyles = makeStyles(styles);
const store = createStore(
  allreducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default function Components() {
  const classes = useStyles();
  return (
    <Provider store={store}>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionNavbars />
        <SectionCarousel />
        <SectionTabs />
      </div>
    </Provider>
  );
}
