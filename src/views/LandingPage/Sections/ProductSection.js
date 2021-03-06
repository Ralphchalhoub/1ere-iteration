import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
//import Chat from "@material-ui/icons/Chat";
//import VerifiedUser from "@material-ui/icons/VerifiedUser";
//import Fingerprint from "@material-ui/icons/Fingerprint";
//import image1 from "assets/img/shirts.jpg";
//import image2 from "assets/img/photo2.jpeg";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
//import InfoArea from "components/InfoArea/InfoArea.js";
import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Products</h2>
          <h5 className={classes.description}>
            You are 1 step away from your purchase... Enjoy exceptional shipping
            and tracking.
          </h5>
        </GridItem>
      </GridContainer>
      {/* <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <div>
              <img src={image1} className="slick-image" />
            </div>
          </GridItem>
        </GridContainer>
      </div> */}
    </div>
  );
}
