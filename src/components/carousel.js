import React, { useEffect, useState } from "react";

//scss
import "../scss/carousel.scss";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";

import { Button, Grid, makeStyles, Typography } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import Slider from "react-slick";

import AddIcon from "@material-ui/icons/Add";

// form
import FormSelect from "./form/formSelect";
import { FormProvider, useForm } from "react-hook-form";

// redux
import { useDispatch, useSelector } from "react-redux";
import { addCustomIcon } from "../redux/actions/iconActions";


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
  // modal
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: "#fff",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    outline: "none",
    borderRadius: theme.shape.borderRadius,
    width: "20%",
  },
  formControl: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const iconsData = [
  { value: "Temperature", label: "TempIcon Icon" },
  { value: "Dust Temperature", label: "Dust Temperature Icon" },
  { value: "Cloud Temperature", label: "Cloud Temperature Icon" },
];

const AddCustomIcon = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const methods = useForm();
  const { handleSubmit } = methods;
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(addCustomIcon(data));
    handleClose();
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { alt } = props;

  return (
    <div>
      <Grid container direction="column">
        <Grid
          item
          className={`${classes.icon} add-custom`}
          onClick={handleOpen}
        >
          <AddIcon color="primary" className="add-icon" />
        </Grid>

        <Grid item className={classes.iconTitle}>
          <Typography variant="body1" align="center">
            {alt}
          </Typography>
        </Grid>
      </Grid>
      <Modal className={classes.modal} open={open} onClose={handleClose}>
        <div className={classes.paper}>
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid container direction="column">
                <Grid item xs>
                  <h3 className={classes.iconTitle} align="center">
                    Add Custom Icon
                  </h3>
                </Grid>
                <Grid item xs>
                  <FormSelect name="iconType" label="IconTypes"  options={iconsData} />
                </Grid>
                <Grid item xs>
                  <Button variant="contained" fullWidth color="primary" onClick={handleSubmit(onSubmit)} style={{ marginTop: 16 }}>
                    SUBMIT
                  </Button>
                </Grid>
              </Grid>
            </form>
          </FormProvider>
        </div>
      </Modal>
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
        <Grid
          item
          className={
            active ? classes.iconTitle : `${classes.iconTitle} text-actived`
          }
        >
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
  const [iconArr, setIconArr] = useState([
    {
      alt: "Add custom",
    },
  ]);
  const icon = useSelector((state) => state.iconReducer.arr);

  useEffect(() => {
    setIconArr(icon);
  }, [icon]);
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
