import React from "react";
// nodejs library that concatenates classes
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";
import GridItem from "components/Grid/GridItem";
import GridContainer from "components/Grid/GridContainer";

const useStyles = makeStyles(styles);

export default function aboutsection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>About us</h2>
          <h4>
            the quickstore is an online retail shop offers a wild variaty of
            footwear and accesories from trendy fashion to casual for women
          </h4>
          <h2 className={classes.title}>Mission</h2>
          <h4>
            Our mission is to provide you with the unique shopping experience by
            offering the latest trend with the professional and friendly service
          </h4>
        </GridItem>
      </GridContainer>
    </div>
  );
}
