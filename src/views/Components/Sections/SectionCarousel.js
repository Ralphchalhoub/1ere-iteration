import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import image1 from "assets/img/dress1.jpeg";
import image2 from "assets/img/dress1.jpeg";
import image3 from "assets/img/dress1.jpeg";
import image4 from "assets/img/boots.jpeg";

import styles from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.js";

const useStyles = makeStyles(styles);

export default function SectionCarousel() {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={26} md={20} className={classes.marginauto}>
            <Card carousel>
              <Carousel {...settings}>
                <div>
                  <img src={image1} alt="First slide" className="slick-image" />
                  <div className="slick-caption">
                    <h4>
                      <homeIcon className="slick-icons" />
                      new collection
                    </h4>
                  </div>
                </div>
                <div>
                  <img
                    src={image2}
                    alt="Second slide"
                    className="slick-image"
                  />
                  <div className="slick-caption">
                    <h4>
                      <homeIcon className="slick-icons" />
                      new collection
                    </h4>
                  </div>
                </div>
                <div>
                  <img src={image3} alt="Third slide" className="slick-image" />
                  <div className="slick-caption">
                    <h4>
                      <homeIcon className="slick-icons" />
                      new collection
                    </h4>
                  </div>
                </div>
              </Carousel>
            </Card>
            <Card sx={{ maxWidth: 150 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="500"
                  image={image4}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Boots
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    leaser boots customized for winter
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
