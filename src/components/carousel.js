import React, { useEffect, useState } from "react";
import "../scss/carousel.scss";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  Typography,
} from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import Slider from "react-slick";

// icons
import shape1 from "../assets/imgs/icons/Shape-1.png";
import shapeDark1 from "../assets/imgs/icons/Shape-1-dark.png";
import shape2 from "../assets/imgs/icons/Shape-2.png";
import shapeDark2 from "../assets/imgs/icons/Shape-2-dark.png";
import shape3 from "../assets/imgs/icons/Shape-3.png";
import shapeDark3 from "../assets/imgs/icons/Shape-3-dark.png";

import AddIcon from "@material-ui/icons/Add";
import {
  Controller,
  FormProvider,
  useForm,
  useFormContext,
} from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addCustomIcon } from "../redux/actions/iconActions";

const ICON_MAP = {
  tempIcon: {
    img: shape1,
    dark: shapeDark1,
    alt: "Temperature",
  },
  cloudIcon: {
    img: shape2,
    dark: shapeDark2,
    alt: "Dust Temperature",
  },
  cloudTempIcon: {
    img: shape3,
    dark: shapeDark3,
    alt: "Cloud Temperature",
  },
  addIcon: {
    alt: "Add custom",
  },
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

const MuiSelect = (props) => {
  const { label, name, options } = props;

  return (
    <FormControl fullWidth={true}>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <Select id={name} {...props}>
        {options.map((item, index) => (
          <MenuItem key={index} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

const FormSelect = (props) => {
  const { control } = useFormContext();
  const { name, label } = props;
  return (
    <React.Fragment>
      <Controller
        as={MuiSelect}
        control={control}
        name={name}
        label={label}
        defaultValue=""
        {...props}
      />
    </React.Fragment>
  );
};

const AddCustomIcon = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const methods = useForm();
  const { handleSubmit } = methods;
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(addCustomIcon(data));
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
                  <FormSelect
                    name="iconType"
                    label="IconTypes"
                    options={iconsData}
                  />
                </Grid>
                <Grid item xs>
                  <Button
                    variant="contained"
                    fullWidth
                    color="primary"
                    onClick={handleSubmit(onSubmit)}
                    style={{ marginTop: 16 }}
                  >
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

let iconList = [];

const Carousel = () => {
  const classes = useStyles();
  const [iconArr, setIconArr] = useState([]);
  const icon = useSelector((state) => state.iconType);
  const getRandomIcons = () => {
    const arr = [ICON_MAP.tempIcon, ICON_MAP.cloudIcon, ICON_MAP.tempIcon];
    for (let i = 0; i < 10; i++) {
      iconList.push(arr[Math.floor(Math.random() * 3)]);
    }
    console.log(icon)
    if (icon) {
      arr.forEach((ele) => {
        if(ele.alt === icon) {
          iconList.push(ele);
        }
      });
    }
    iconList.push(ICON_MAP.addIcon);
    console.log(iconList);
    return iconList;
  };

  useEffect(() => {
    console.log(icon)
    setIconArr(getRandomIcons());
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
