import {
  Box,
  Container,
  Grid,
  IconButton,
  InputBase,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Send } from "@material-ui/icons";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.bg,
    marginTop: "15%",
    height: "40vh",
    position: "relative",
  },
  newsletter: {
    backgroundColor: theme.palette.primary.main,
    width: 350,
    height: 120,
    padding: theme.spacing(4),
    position: "absolute",
    right: "100px",
    top: "-100px",
  },
  title: {
    marginBottom: theme.spacing(1),
    color: "#fff",
  },
  subtitle: {
    marginTop: theme.spacing(1),
    color: "#fff",
  },
  input: {
    backgroundColor: "#fff",
    color: theme.palette.primary.dark,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: theme.spacing(0, 2),
  },
}));
const Footer = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.root}>
        <Container maxWidth="lg">
          <Grid
            container
            justify="space-between"
            alignItems="center"
            style={{ paddingTop: "10%" }}
          >
            <Grid item container xs>
              <Grid item xs={4}>
                <Box className={classes.title} fontWeight="bolder">
                  ABOUT US
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box className={classes.title} fontWeight="bolder">
                  CATEGORIES
                </Box>
              </Grid>
            </Grid>
            <Grid item xs={3}>
              <Box className={classes.title} fontWeight="bolder">
                ACCEPT PAYMENTS
              </Box>
            </Grid>
          </Grid>
          <div className={classes.newsletter}>
            <Grid container direction="column">
              <Grid item>
                <Typography className={classes.title} variant="subtitle1">
                  NEWSLETTER
                </Typography>
              </Grid>
              <Grid item className={classes.input}>
                <InputBase placeholder="Enter your email"></InputBase>
                <IconButton>
                  <Send />
                </IconButton>
              </Grid>
              <Grid item>
                <Typography className={classes.subtitle} variant="body2">
                  Remeber we will not do spam promise.
                </Typography>
              </Grid>
              <Grid item></Grid>
            </Grid>
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Footer;
