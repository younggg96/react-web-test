import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button, Container, Grid, IconButton, Typography } from "@material-ui/core";
import logo from "../assets/imgs/logo.png";
import "../scss/header.scss";
import FavoriteBorderSharpIcon from "@material-ui/icons/FavoriteBorderSharp";
import SearchSharpIcon from "@material-ui/icons/SearchSharp";

const useStyles = makeStyles((theme) => ({
  signin: {
    height: "100px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  links: {
    backgroundColor: theme.palette.secondary.dark,
    flexWrap: "nowrap",
    padding: theme.spacing(3, 5)
  },
  linkText: {
    color: theme.palette.secondary.light,
    fontSize: "14px",
    cursor: "pointer",
    padding: theme.spacing(1, 4),
    borderRadius: 8,
    border: "1px transparent solid",
    "&:hover": {
      border: "1px rgba(245, 245, 245, 0.3) solid",
    }
  },
  side: {
    // flex: 2,
  },
}));

const Header = () => {
  const classes = useStyles();
  const links = ["CONSTRUCTOR", "HELP", "USERS PANELS", "FAQ", "ABOUT", "BLOG"];
  return (
    <React.Fragment>
      <div className={classes.root}>
        <Grid container direction="column">
          <Container maxWidth="xl">
            <Grid item className={classes.signin}>
              <div className="left">
                <img alt="logo" src={logo} />
                <Typography variant="body1" component="span">
                  FRAMEWORK
                </Typography>
              </div>
              <div className="right">
                <Button>Sign in</Button>
              </div>
            </Grid>
          </Container>
          <Grid item container className={classes.links}>
            <Grid item container direction="row" justify="space-evenly" alignItems="center" className="linkButtons">
              {links.map((it) => {
                return (
                  <Grid item key={JSON.stringify(it)}>
                    <Typography className={classes.linkText}>{it}</Typography>
                  </Grid>
                );
              })}
            </Grid>
            <Grid item className={`${classes.side} iconButton`}>
              <IconButton color="primary" aria-label="favorite">
                <FavoriteBorderSharpIcon />
              </IconButton>
              <div className="line"></div>
              <IconButton color="primary" aria-label="search">
                <SearchSharpIcon />
              </IconButton>
            </Grid>
          </Grid>
          <Grid item className="title">
              <div className="title-content">
                <Typography variant="h4" component="div">CHIP&nbsp;<Box color="primary" component="span">CONSTRUCTOR</Box></Typography>
              </div>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
};

export default Header;
