import React from "react";
// nodejs library that concatenates classes
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";
import GridItem from "components/Grid/GridItem";
import GridContainer from "components/Grid/GridContainer";
import image1 from "assets/img/shirts.jpg";
import dresses from "assets/img/shirt2.jpeg";
import photosss from "assets/img/shirt3.jpeg";
import photos from "assets/img/shirt4.jpeg";
import classNames from "classnames";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "actions";
import { Button } from "@material-ui/core";
import { Box } from "@material-ui/core";

const useStyles = makeStyles(styles);

export default function aboutsection() {
  const classes = useStyles();
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2>lets make a difference</h2>
          <GridContainer>
            <GridItem>
              <img src={image1} alt="..." className={imageClasses} />
              <h1>quantity{counter}</h1>
              <Button onclick={() => dispatch(increment(1))}>+</Button>
              <Button type="button" color="primary">
                quantity
              </Button>
              <Button onclick={() => dispatch(increment(1))}>-</Button>
              <Box>
                <Button>Add to cart </Button>
              </Box>
            </GridItem>
            <GridItem>
              <img src={dresses} alt="..." className={imageClasses} />
              <br></br>
              <Button onclick={() => dispatch(increment(1))}>+</Button>
              <Button color="primary">quantity</Button>
              <Button onclick={() => dispatch(increment(1))}>-</Button>
              <br></br>
              <Box>
                <Button>Add to cart </Button>
              </Box>
            </GridItem>
            <GridItem>
              <img src={photosss} alt="..." className={imageClasses} />
              <br></br>
              <Button onclick={() => dispatch(increment(1))}>+</Button>
              <Button color="primary">quantity</Button>
              <Button onclick={() => dispatch(increment(1))}>-</Button>
              <br></br>
              <Box>
                <Button>Add to cart </Button>
              </Box>
            </GridItem>
            <GridItem>
              <img src={photos} alt="..." className={imageClasses} />
              <br></br>
              <Button onclick={() => dispatch(increment(1))}>+</Button>
              <Button color="primary">quantity</Button>
              <Button onclick={() => dispatch(increment(1))}>-</Button>
              <br></br>
              <Box>
                <Button>Add to cart </Button>
              </Box>
            </GridItem>
          </GridContainer>
        </GridItem>
      </GridContainer>
    </div>
  );
}
