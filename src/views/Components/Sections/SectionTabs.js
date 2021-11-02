import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
//import Face from "@material-ui/icons/Face";

import styles from "assets/jss/material-kit-react/views/componentsSections/tabsStyle.js";
// import GridContainer from "components/Grid/GridContainer";
import { Button } from "@material-ui/core";
import { ListItem } from "@material-ui/core";
import GridItem from "components/Grid/GridItem";

// import GridItem from "components/Grid/GridItem";
import { Link } from "react-router-dom";

const useStyles = makeStyles(styles);

export default function SectionTabs() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div className={classes.typo}>
          <nav
            className="home-footer__legal-section"
            aria-labelledby="legal-documents-title"
          >
            <div>
              <Button>terms and conditions</Button>
              <div
                style={{
                  position: "absolute",
                  WebkitFilter: "blur(10px) saturate(2)",
                }}
              />
            </div>
            <div>
              <Button>Cookies Settings</Button>
              <div
                style={{
                  position: "absolute",
                  WebkitFilter: "blur(10px) saturate(2)",
                }}
              />
            </div>
            <div>
              <Button>Privacy and cookies policy</Button>
              <div
                style={{
                  position: "absolute",
                  WebkitFilter: "blur(10px) saturate(2)",
                }}
              />
            </div>
            <div>
              <h5>follow us on:</h5>
              <div
                style={{
                  position: "absolute",
                  WebkitFilter: "blur(10px) saturate(2)",
                }}
              />
              <Button justIcon link className={classes.margin5}>
                <i className={"fab fa-twitter"} />
              </Button>
              <Button justIcon link className={classes.margin5}>
                <i className={"fab fa-instagram"} />
              </Button>
              <Button justIcon link className={classes.margin5}>
                <i className={"fab fa-facebook"} />
              </Button>
            </div>
            <div>
              <ListItem className={classes.listItem}>
                <GridItem md={12} className={classes.textCenter}></GridItem>
              </ListItem>
              <ListItem className={classes.listItem}>
                <GridItem md={12} className={classes.textCenter}>
                  <Link to={"/register-page"} className={classes.link}>
                    <Button color="default" size="mx" simple>
                      Register
                    </Button>
                  </Link>
                </GridItem>
              </ListItem>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
