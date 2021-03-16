import { Container, makeStyles } from "@material-ui/core";
import React from "react";
import Header from "./components/header";
import Carousel from './components/carousel';
import Content from "./components/content/content";


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.secondary.light
  }
}))
export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <Carousel />
      <Container maxWidth="lg">
        <Content />
      </Container>
    </div>
  );
}
