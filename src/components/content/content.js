import React, { useEffect, useState } from "react";
import { Box, Button, Divider, Grid, GridList, GridListTile, makeStyles, Slider, Typography } from "@material-ui/core";
import ChooseOptions from "./chooseOptions";
// icon
import DoneIcon from '@material-ui/icons/Done';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
// img
import prod from "../../assets/imgs/product.png";
//scss
import "../../scss/content.scss";
// brands
import logoLight1 from '../../assets/imgs/brands/logo1-light.png';
import logoLight2 from '../../assets/imgs/brands/logo2-light.png';
import logoLight3 from '../../assets/imgs/brands/logo3-light.png';
import logoLight4 from '../../assets/imgs/brands/logo4-light.png';
import logoDark1 from '../../assets/imgs/brands/logo1-dark.png';
import logoDark2 from '../../assets/imgs/brands/logo2-dark.png';
import logoDark3 from '../../assets/imgs/brands/logo3-dark.png';
import logoDark4 from '../../assets/imgs/brands/logo4-dark.png';
import { useSelector } from "react-redux";


const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#fff',
    marginTop: theme.spacing(4),
    width: "100%",
  },
  choose: {
    borderRadius: '16px 0px 0px 16px',
    padding: theme.spacing(3, 1),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "20px 0px 20px 0px #06060612",
  },
  order: {
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(4, 6),
  },
  orderTitle: {
    color: theme.palette.secondary.light,
    lineHeight: 1,
  },
  orderButton: {
    padding: "12px 64px",
    borderRadius: 32,
    color: theme.palette.secondary.light,
    borderColor: theme.palette.secondary.light,
    fontWeight: "bolder",
  },
  content: {
    color: theme.palette.secondary.light,
    padding: theme.spacing(2, 6),
    width: 400,
  },
  doneIcon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: theme.spacing(1, 1.5),
    backgroundColor: theme.palette.primary.dark,
    borderRadius: "50%",
    padding: 10,
  },
  steps: {
    padding: theme.spacing(4, 2),
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  title: {
    lineHeight: 1,
    fontWeight: "bolder"
  },
  slider: {
    marginTop: theme.spacing(2)
  },
  gridList: {
    padding: theme.spacing(1, 4, 1, 0),
  },
  chooseTab: {
    marginTop: theme.spacing(4)
  },
  chooseItem: {
    height: "100px !important",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  brandIcon: {
    width: 120,
    height: 80,
    backgroundColor: "#fafafa",
    borderRadius: 12,
    cursor: "pointer",
    backgroundPosition: "center center", 
    backgroundRepeat: "no-repeat"
  },
  next: {
    padding: theme.spacing(5),
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  nextButton: {
    padding: "12px 40px",
    fontSize: 16,
    fontWeight: "600",
    borderRadius: 25,
    "&:hover": {
      backgroundColor: theme.palette.primary.main
    }
  },
  tabs: {
    position: "absolute",
    left: "100%",
    top: "calc(50% - 65px)",
  },
  tab: {
    width: 80,
    height: 60,
    borderRadius: "0 12px 12px 0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "10px 0",
    cursor: "pointer"
  }
}));

const SliderBar = () => {
  const classes = useStyles();
  const [currentDistance, setCurrentDistance] = useState(22);
  const handleSliderChange = (event, newValue) => {
    setCurrentDistance(newValue);
  };

  return (
    <React.Fragment>
      <Grid container className={classes.slider} direction="column" style={{ paddingRight: 40 }}>
        <Grid item container justify="space-between" alignItems="center">
          <Grid item xs>
            <Typography variant="h6" component="span">CHOOSE <Box component="span" color="primary.main">DISTANCE</Box></Typography>
          </Grid>
          <Grid item container xs={4} justify="flex-end" alignItems="center">
            <Grid item xs style={{ textAlign: "end" }}>
              <Typography style={{lineHeight: 1}}>CURRENT <br />DISTANCE </Typography>
            </Grid>
            <Grid item xs style={{ textAlign: "end" }}>
              <Typography variant="h3" component="span" style={{ fontWeight: "bolder"}}>{currentDistance}</Typography>
              <Box color="primary.main" component="span" style={{ fontWeight: "500", fontSize: "28px"}}>m</Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Slider
            value={currentDistance}
            onChange={handleSliderChange}
            max="50"
          />
        </Grid>
        <Grid item container justify="space-between" alignItems="center">
          <Typography variant="body1"><Box color="primary.dark" fontWeight="600">0m</Box></Typography>
          <Typography variant="body1"><Box color="primary.dark" fontWeight="600">50m</Box></Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

const BRANDS_ARR = [
  {id: '1',light: logoLight1, dark: logoDark1},
  {id: '2',light: logoLight2, dark: logoDark2},
  {id: '3',light: logoLight3, dark: logoDark3},
  {id: '4',light: logoLight4, dark: logoDark4},
];

const ChooseItem = (props) => {
  const classes = useStyles();
  const [active, setActive] = useState(false);
  const {dark, light} = props.ele;
  
  const clickHandler = () => {
    setActive(!active);
  };

  return (
    <React.Fragment>
      <div className={classes.brandIcon} onClick={clickHandler} style={ !active? {backgroundImage: `url(${dark})`} : {backgroundImage: `url(${light})`, backgroundColor: "#ee4420", position: "relative"}}>
        { !active ? null : <DoneIcon className="done-svg done-active" /> }
      </div>
    </React.Fragment>
  )
}

const ChooseTab = () => {
  const classes = useStyles();
  const [tileData, setTileData] = useState([]);

  useEffect(() => {
    setTileData(getRandomDate());
  }, []);

  const getRandomDate = () => {
    const date = [];
    for (let i = 0; i < 8; i++) {
      date.push(BRANDS_ARR[Math.floor(Math.random() * 4)]);
    }
    console.log(date);
    return date;
  }

  return (
    <React.Fragment>
      <GridList cellHeight={160} className={classes.gridList} cols={4}>
        {tileData.map((ele, index )=> (
          <GridListTile key={index} className={classes.chooseItem}>
            <ChooseItem ele={ele}/>
          </GridListTile>
        ))}
      </GridList>
    </React.Fragment>
  )
}

const Content = () => {
  const classes = useStyles();
  const [active, setActive] = useState(false);
  const [show, setShow] = useState(false);
  const list = useSelector(state => state.optionReducer);
    
  const clickHandler = () => {
    setActive(!active);
  };
  useEffect(() => {
    console.log(list)
    console.log(show)
    if(list.list.length >= 4) {
      setShow(true);
    }
  }, [list]);

  return (
    <React.Fragment>
      <Grid container className={classes.root}>
        <Grid container item xs={6} className="bg-clip">
          <Grid item xs={2} className={classes.choose}>
            <ChooseOptions />
          </Grid>
          <Grid item container xs direction="column" style={{ position: "relative" }}>
            <Grid item container className={classes.order}>
              <Grid item xs={5}>
                <Typography variant="h6" className={classes.orderTitle}>
                  <Box fontWeight="bolder">
                    WHITE LABEL
                    <br /> W-394900 XP
                  </Box>
                </Typography>
              </Grid>
              <Grid item xs>
                <Button variant="outlined" className={classes.orderButton}>
                  ORDER NOW
                </Button>
              </Grid>
            </Grid>
            <Grid item className={classes.content}>
              <Typography
                variant="body1"
                component="span"
                style={{ marginBottom: 16 }}
              >
                <Box fontWeight="700">
                  Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non
                  mauris vitae erat consequat auctor eu in elit. Class aptent
                  taciti sociosqu ad litora torquent per conubia nostra, per i
                </Box>
              </Typography>
              <Typography variant="body2" component="span">
                <Box fontWeight="400">
                  nceptos himenaeos. Mauris in erat justo. Nullam ac urna eu
                  felis dapibus condimentum sit amet a augue. Sed non neque
                  elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc.
                  Etiam pharetra, erat sed fermentum feugiat, velit mauris
                  egestas quam, ut aliquam massa nisl quis neque. Suspendisse in
                  orci enim.
                </Box>
              </Typography>
            </Grid>
              {
                show ? (
                <Grid item className="live-view">
                  <Typography variant="h5" component="div">
                    LIVE<br /> VIEW
                  </Typography>
                </Grid>) : null
              }
          </Grid>
        </Grid>
        <Grid item container xs={6} direction="column" style={{ position: "relative" }}>
          <Grid item container direction="column" className={classes.steps}>
            <Grid item container direction="row" style={{ display: "flex", justifyContent: "flex-end" }}>
              {[0, 1, 2, 3].map(ele => {
                if (ele === 2) return (<div key={ele} className={`${classes.doneIcon} now-step`}>
                  <DoneIcon className="done-svg now-step" />
                </div>)
                return (<div key={ele} className={classes.doneIcon}>
                  <DoneIcon className="done-svg" />
                </div>)
              })}
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" style={{ padding: "8px 16px", fontWeight: "bolder", color: "#00000050" }}>Complete 3 steps of 4</Typography>
            </Grid>
          </Grid>
          <Grid item container direction="column">
            <Typography variant="h4" className={classes.title}>
              TRANSMISSION
               <Box color="primary.main">DISTANCE</Box>
            </Typography>
          </Grid>
          <Grid item className={classes.slider}><SliderBar /></Grid>
          <Divider style={{width: "95%"}}/>
          <Grid item container direction="column" className={classes.chooseTab}>
            <Grid item>
              <Typography variant="h6" component="span">CHOOSE <Box component="span" color="primary.main">TYPE OF CONNECTION</Box></Typography>
              <ChooseTab />
            </Grid>
            <Grid item className={classes.next}>
              <Button variant="contained" color="primary" className={classes.nextButton}>NEXT STEP</Button>
            </Grid>
          </Grid>
          <div className={classes.tabs}>
            <div className={classes.tab} onClick={clickHandler} style={active ? {backgroundColor: "#ee4420"} : {backgroundColor: "#00000030"}}>
              <KeyboardArrowRightIcon className="arrow-icon"/>
            </div>
            <div className={classes.tab} onClick={clickHandler} style={active ? {backgroundColor: "#00000030"} : {backgroundColor: "#ee4420"}}>
              <KeyboardArrowLeftIcon className="arrow-icon"/>
            </div>
          </div>
          {show ? <img className="prod" src={prod} alt="prod" /> : null}
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Content;
