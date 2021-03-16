import React from "react";
import { Box, Button, Grid, makeStyles, Typography } from "@material-ui/core";
import ChooseOptions from "./chooseOptions";
import prod from "../../assets/imgs/product.png";
import "../../scss/content.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fff",
    borderRadius: theme.shape.borderRadius,
    marginTop: theme.spacing(4),
    width: "100%",
  },
  choose: {
    borderRadius: '16px 0 0 16px',
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(4),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "20px 0px 20px 0px #06060612",
  },
  order: {
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(6),
  },
  orderTitle: {
    color: theme.palette.secondary.light,
  },
  orderButton: {
    padding: "16px 72px",
    borderRadius: 32,
    color: theme.palette.secondary.light,
    borderColor: theme.palette.secondary.light,
    fontWeight: "bolder",
  },
  content: {
    color: theme.palette.secondary.light,
    padding: theme.spacing(2, 6),
    width: 360,
  },
}));

const Content = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={`${classes.root} bg-whole`}>
        <Grid container>
          <Grid item xs={1} className={classes.choose}>
            <ChooseOptions />
          </Grid>
          <Grid item container xs={4} direction="column" className="bg-clip">
            <Grid item container className={classes.order}>
              <Grid item xs="5">
                <Typography variant="h5" className={classes.orderTitle}>
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
                variant="body2"
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
              <Typography variant="h4" component="div">
                LIVE<br /> VIEW
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs>
            hhahahahh
            <img className="prod" src={prod} alt="prod" width="450px"/>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
};

export default Content;
