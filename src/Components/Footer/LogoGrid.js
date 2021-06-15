import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import logo1 from "./logo1.png";
import logo2 from './logo2.png';
import logo3 from './logo3.png';
import logo4 from './logo4.png';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function LogoGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container  justify="center"  direction="row"alignItems="center" spacing={1}>
        <Grid container  justify="center" item xs={3} >
          <img src={logo1} />
        </Grid>
        <Grid container  justify="center" item xs={3} >
          <img src={logo2} />
        </Grid>
        <Grid container  justify="center" item xs={3} >
          <img src={logo3} />
        </Grid>
        <Grid container  justify="center" item xs={3} >
          <img src={logo4} />
        </Grid>
      </Grid>
    </div>
  );
}
