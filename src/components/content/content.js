import React, { useState } from "react";
import { Box, Button, Divider, Grid, makeStyles, Slider, Typography } from "@material-ui/core";
import ChooseOptions from "./chooseOptions";
// icon
import DoneIcon from '@material-ui/icons/Done';
// img
import prod from "../../assets/imgs/product.png";
//scss
import "../../scss/content.scss";

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
    margin: theme.spacing(1, 1.5),
    backgroundColor: theme.palette.primary.dark,
    borderRadius: "50%",
    padding: theme.spacing(1),
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
  chooseTab: {
    marginTop: theme.spacing(4)
  }
}));

const SliderBar = () => {
  const classes = useStyles();
  const [currentDistance, setCurrentDistance] = useState(22);
  const handleSliderChange = (event, newValue) => {
    console.log(event.target.value)
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

const TabItem = () => {
  const classes = useStyles();
  return (
    <div></div>
  )
}

const ChooseTab = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid></Grid>
    </React.Fragment>
  )
}

const Content = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid container className={classes.root}>
        <Grid container item xs={6} className="bg-clip">
          <Grid item xs={2} className={classes.choose}>
            <ChooseOptions />
          </Grid>
          <Grid item container xs direction="column" style={{ position: "relative" }}>
            <Grid item container className={classes.order}>
              <Grid item xs="5">
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
                component="p"
                style={{ marginBottom: 16 }}
              >
                <Box fontWeight="700">
                  Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non
                  mauris vitae erat consequat auctor eu in elit. Class aptent
                  taciti sociosqu ad litora torquent per conubia nostra, per i
                </Box>
              </Typography>
              <Typography variant="body2" component="p">
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
            <Grid item className="live-view">
              <Typography variant="h5" component="div">
                LIVE<br /> VIEW
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item container xs={6} direction="column" style={{ position: "relative" }}>
          <Grid item container direction="column" className={classes.steps}>
            <Grid item direction="row" style={{ display: "flex" }}>
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
              <Typography variant="subtitle1" style={{ padding: "8px 16px", fontWeight: "bolder", color: "#00000080" }}>Complete 3 steps of 4</Typography>
            </Grid>
          </Grid>
          <Grid item container direction="column">
            <Typography variant="h4" className={classes.title}>
              TRANSMISSION
               <Box color="primary.main">DISTANCE</Box>
            </Typography>
          </Grid>
          <Grid item className={classes.slider}><SliderBar /></Grid>
          <Divider />
          <Grid item className={classes.chooseTab}>
            <Grid item xs>
              <Typography variant="h6" component="span">CHOOSE <Box component="span" color="primary.main">TYPE OF CONNECTION</Box></Typography>
              <ChooseTab />
            </Grid>
          </Grid>
          <img className="prod" src={prod} alt="prod" />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Content;
