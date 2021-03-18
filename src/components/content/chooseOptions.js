import {
  Box,
  Button,
  Grid,
  List,
  ListItem,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

// icons
import shape1 from "../../assets/imgs/icons/Shape-1.png";
import shape2 from "../../assets/imgs/icons/Shape-2.png";
import shape3 from "../../assets/imgs/icons/Shape-3.png";
import { chooseOption } from "../../redux/actions/chooseOptions";

const iconList = [];
const getRandomIcons = () => {
  const arr = [shape1, shape2, shape3];
  for (let i = 0; i < 8; i++) {
    iconList.push(arr[Math.floor(Math.random() * 3)]);
  }
  return iconList;
};

const useStyles = makeStyles((theme) => ({
  title: {
    color: theme.palette.secondary.light,
    marginBottom: theme.spacing(2),
    padding: theme.spacing(0, 1),
  },
  icon: {
    margin: "auto",
    padding: theme.spacing(2),
    width: 20,
    height: 64,
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "5px 4px 20px 0px #06060638",
  },
}));

const ChooseOptions = () => {
  const classes = useStyles();
  const [iconArr, setIconArr] = useState([]);
  const dispatch = useDispatch();
  const chooseHandler = (ele) => {
    console.log(ele);
    dispatch(chooseOption(ele));
  };
  useEffect(() => {
    setIconArr(getRandomIcons());
  }, []);
  return (
    <Grid container direction="column">
      <Grid item>
        <Typography
          variant="subtitle2"
          component="div"
          align="center"
          className={classes.title}
        >
          CHOOSEN
          <Box fontWeight="bolder">OPTIONS:</Box>
        </Typography>
      </Grid>
      <Grid item>
        <List>
          {iconArr.map((item, index) => {
            return (
              <ListItem key={index} style={{ marginBottom: 8 }}>
                <Button className={classes.icon} onClick={() => chooseHandler(item)}>
                  <img src={item} alt="" width="20px" />
                </Button>
              </ListItem>
            );
          })}
        </List>
      </Grid>
    </Grid>
  );
};

export default ChooseOptions;
