import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
// import Search from "@material-ui/icons/Search";
// core components
import Header from "components/Header/Header.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

//import image from "assets/img/bg.jpg";

import styles from "assets/jss/material-kit-react/views/componentsSections/navbarsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionNavbars() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div className={classes.title}>
          <h3>Thequickstore</h3>
        </div>
      </div>
      <div id="navbar" className={classes.navbar}>
        <Header
          brand="Thequickstore"
          color="rose"
          leftLinks={
            <List className={classes.list}>
              <ListItem className={classes.listItem}>
                <Button color="default" expand="sm" simple>
                  Home
                </Button>
              </ListItem>
              <ListItem className={classes.listItem}>
                <GridItem md={12} className={classes.textCenter}>
                  <Link to={"/Landing-Page"} className={classes.link}>
                    <Button color="default" expand="sm" simple>
                      Products
                    </Button>
                  </Link>
                </GridItem>
              </ListItem>
              <ListItem className={classes.listItem}>
                <GridItem md={12} className={classes.textCenter}>
                  <Link to={"/About-Page"} className={classes.link}>
                    <Button color="default" expand="sm" simple>
                      About
                    </Button>
                  </Link>
                </GridItem>
              </ListItem>
              <ListItem className={classes.listItem}>
                <GridItem md={12} className={classes.textCenter}>
                  <Link to={"/bag-page"} className={classes.link}>
                    <Button color="default" expand="sm" simple>
                      Cart
                    </Button>
                  </Link>
                </GridItem>
              </ListItem>
              <ListItem className={classes.listItem}>
                <GridItem md={12} className={classes.textCenter}>
                  <Link to={"/login-page"} className={classes.link}>
                    <Button color="default" expand="sm" simple>
                      profile
                    </Button>
                  </Link>
                </GridItem>
              </ListItem>
              <ListItem className={classes.listItem}>
                <GridItem md={12} className={classes.textCenter}>
                  <Link to={"/register-page"} className={classes.link}>
                    <Button color="default" expand="sm" simple>
                      Register
                    </Button>
                  </Link>
                </GridItem>
              </ListItem>
            </List>
          }
        />
      </div>
    </div>
  );
}
