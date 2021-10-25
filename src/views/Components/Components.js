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
//import SectionLogin from "./Sections/SectionLogin.js";

import styles from "assets/jss/material-kit-react/views/components.js";
//import SectionJavascript from "./Sections/SectionJavascript.js";

const useStyles = makeStyles(styles);

export default function Components() {
  const classes = useStyles();
  return (
    <div className={classNames(classes.main, classes.mainRaised)}>
      <SectionNavbars />
      <SectionCarousel />
    </div>
  );
}
