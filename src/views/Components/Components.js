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
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/components.js";
//import SectionJavascript from "./Sections/SectionJavascript.js";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "actions";

const useStyles = makeStyles(styles);

export default function Components() {
  const counter = useSelector((state) => state.counter);
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <div className={classNames(classes.main, classes.mainRaised)}>
      <SectionNavbars />
      <SectionCarousel />
      <h1>counter{counter}</h1>
      <Button onclick={() => dispatch(increment(1))}>press me+</Button>
      <Button onclick={() => dispatch(increment(1))}>press me-</Button>
    </div>
  );
}
