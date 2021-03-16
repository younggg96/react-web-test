import {
  Box,
  Grid,
  List,
  ListItem,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";

// icons
import shape1 from "../../assets/imgs/icons/Shape-1.png";
import shape2 from "../../assets/imgs/icons/Shape-2.png";
import shape3 from "../../assets/imgs/icons/Shape-3.png";

const iconList = [];
const getRandomIcons = () => {
  const arr = [shape1, shape2, shape3];
  for (let i = 0; i < 8; i++) {
    // console.log(i);
    // console.log(arr[Math.floor(Math.random() * 3)]);
    iconList.push(arr[Math.floor(Math.random() * 3)]);
  }
  return iconList;
};

const useStyles = makeStyles((theme) => ({
  title: {
    color: theme.palette.secondary.light,
    marginBottom: theme.spacing(2)
  },
  icon: {
    margin: "auto",
    padding: theme.spacing(2),
    width: 40,
    height: 40,
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "5px 4px 20px 0px #06060638",
    cursor: "pointer",
  }
}));

const ChooseOptions = () => {
  const classes = useStyles();
  const [iconArr, setIconArr] = useState([]);
  useEffect(() => {
    setIconArr(getRandomIcons());
  }, []);
  return (
    <div>
      <Grid container direction="column">
        <Grid item>
          <Typography
            variant="subtitle1"
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
                <ListItem key={index} style={{ marginBottom: 8}}>
                  <div className={classes.icon}>
                    <img src={item} alt="" width="26px" />
                  </div>
                </ListItem>
              );
            })}
          </List>
        </Grid>
      </Grid>
    </div>
  );
};

export default ChooseOptions;
