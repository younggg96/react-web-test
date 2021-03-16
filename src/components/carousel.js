import React, { useEffect, useState } from "react";
import "../scss/carousel.scss";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import Slider from "react-slick";

// icons
import shape1 from "../assets/imgs/icons/Shape-1.png";
import shapeDark1 from "../assets/imgs/icons/Shape-1-dark.png";
import shape2 from "../assets/imgs/icons/Shape-2.png";
import shapeDark2 from "../assets/imgs/icons/Shape-2-dark.png";
import shape3 from "../assets/imgs/icons/Shape-3.png";
import shapeDark3 from "../assets/imgs/icons/Shape-3-dark.png";

import AddIcon from "@material-ui/icons/Add";

const ICON_MAP = {
  tempIcon: {
    img: shape1,
    dark: shapeDark1,
    alt: "Temperature",
  },
  cloudIcon: {
    img: shape2,
    dark: shapeDark2,
    alt: "Dust temperature",
  },
  cloudTempIcon: {
    img: shape3,
    dark: shapeDark3,
    alt: "Cloud temperature",
  },
  addIcon: {
    alt: "Add custom",
  },
};

let iconList = [];

const getRandomIcons = () => {
  const arr = [
    ICON_MAP.tempIcon,
    ICON_MAP.cloudIcon,
    ICON_MAP.tempIcon,
    ICON_MAP.addIcon,
  ];
  for (let i = 0; i < 10; i++) {
    iconList.push(arr[Math.floor(Math.random() * 3)]);
  }
  iconList.push(arr[3]);
  console.log(iconList);
  return iconList;
};

const useStyles = makeStyles((theme) => ({
  icon: {
    margin: "auto",
    padding: theme.spacing(2),
    width: 90,
    height: 90,
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "4px 2px 10px 0px #02020245",
    cursor: "pointer",
  },
  iconTitle: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(0, 2),
  },
  icons: {
    marginTop: theme.spacing(4),
    padding: "0 10%",
  },
}));

const AddCustomIcon = (props) => {
  const classes = useStyles();
  const { alt } = props;
  return (
    <div>
      <Grid container direction="column">
        <Grid item className={`${classes.icon} add-custom`}>
          <AddIcon color="primary" className="add-icon"/>
        </Grid>
        <Grid item className={classes.iconTitle}>
          <Typography variant="body1" align="center">
            {alt}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

const IconListButtons = (props) => {
  const classes = useStyles();
  const [active, setActive] = useState(false);
  const { img, dark, alt } = props;
  const clickHandler = () => {
    setActive(!active);
  };

  return (
    <div>
      <Grid container direction="column">
        <Grid
          item
          className={!active ? classes.icon : `${classes.icon} actived`}
          onClick={clickHandler}
        >
          {!active ? (
            <img src={dark} alt={alt} width="26px" />
          ) : (
            <img src={img} alt={alt} width="26px" />
          )}
        </Grid>
        <Grid item className={active ? classes.iconTitle : `${classes.iconTitle} text-actived`}>
          <Typography variant="body1" align="center">
            {alt}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        right: "-5%",
        width: "100px",
        height: "100px",
        textAlign: "center",
      }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        left: "-5%",
        width: "100px",
        height: "100px",
        textAlign: "center",
      }}
      onClick={onClick}
    />
  );
}

const Carousel = () => {
  const classes = useStyles();
  const [iconArr, setIconArr] = useState([]);
  useEffect(() => {
    setIconArr(getRandomIcons())
  }, []);
  const settings = {
    infinite: false,
    slidesToShow: 11,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          infinite: false,
          slidesToShow: 8,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          infinite: false,
          slidesToShow: 6,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          infinite: false,
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          infinite: false,
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: <NextArrow className="arrow" />,
    prevArrow: <PrevArrow className="arrow" />,
  };
  return (
    <div className={classes.icons}>
      <Slider {...settings}>
        {iconArr.map((ele) => {
          if (ele.alt === "Add custom")
            return <AddCustomIcon alt={ele.alt} key={ele.alt} />;
          return (
            <IconListButtons
              img={ele.img}
              dark={ele.dark}
              alt={ele.alt}
              key={ele.alt}
            />
          );
        })}
      </Slider>
    </div>
  );
};

export default Carousel;
