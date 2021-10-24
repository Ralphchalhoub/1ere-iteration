import React from "react";
// react plugin for creating date-time-picker
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// import { Link } from "react-router-dom";
// import Button from "components/CustomButtons/Button.js";
import Slide from "@material-ui/core/Slide";
import styles from "assets/jss/material-kit-react/views/componentsSections/javascriptStyles.js";
import Header from "components/Header/Header.js";
import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
import Button from "components/CustomButtons/Button.js";
// import { ListItem } from "@material-ui/core";
import GridContainer from "components/Grid/GridContainer.js";
import { ListItem } from "@material-ui/core";
// import GridItem from "components/Grid/GridItem";
// import { Button } from "@material-ui/core";
const useStyles = makeStyles(styles);
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});
Transition.displayName = "Transition";
export default function SectionJavascript() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer>
          <Header
            brand="color"
            leftLinks={
              <List className={classes.list}>
                <ListItem className={classes.listItem}>
                  <Button
                    href="#pablo"
                    className={classes.styles}
                    onClick={(e) => e.preventDefault()}
                    color="transparent"
                  >
                    home
                  </Button>
                </ListItem>
              </List>
            }
          ></Header>
        </GridContainer>
      </div>
    </div>
  );
}
