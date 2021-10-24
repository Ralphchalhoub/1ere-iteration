import React from "react";
// nodejs library that concatenates classes
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/aboutpage.js";
import GridItem from "components/Grid/GridItem";
import GridContainer from "components/Grid/GridContainer";

const useStyles = makeStyles(styles);

export default function aboutsection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>not listed items</h2>
          <h4 className={classes.description}>
            Divide details about your product or agency work into parts. Write a
            few lines about each one and contact us about any further
            collaboration. We will responde get back to you in a couple of
            hours.
          </h4>
        </GridItem>
      </GridContainer>
    </div>
  );
}