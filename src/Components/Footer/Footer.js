import "./Footer.css";
import LogoGrid from "./LogoGrid";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import shoeZoneLogo from "./shoeZoneLogo.png";
import TextField from "@material-ui/core/TextField";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Flogo from "./facebook-logo (2).png";
import Glogo from "./google-glass-logo (1).png";
import Tlogo from "./twitter.png";
import TuLogo from "./tumblr.png";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  widthGrid: {
    flexBasis: "20%",
  },
}));
const useStyles1 = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

const Footer = () => {
  const classes = useStyles();
  const classes1 = useStyles1();
  return (
    <div className="Footer-main">
      <LogoGrid></LogoGrid>
      <div className="Footer-div">
        <div className={classes.root}>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={1}
          >
            <Grid item xs={4} className={classes.widthGrid}>
              <img src={shoeZoneLogo} />
            </Grid>
            <Grid item xs={4} className={classes.widthGrid}>
              <div className={classes1.margin}>
                <Grid
                  container
                  spacing={1}
                  style={{ width: "200px" }}
                  alignItems="flex-end"
                >
                  <Grid item>
                    <AccountCircle />
                  </Grid>
                  <Grid item>
                    <TextField
                      id="input-with-icon-grid"
                      label="Email us"
                      color="secondary"
                    />
                  </Grid>
                </Grid>
              </div>
            </Grid>
            <Grid item xs={4} className={classes.widthGrid}>
              <img
                src={Flogo}
                style={{ width: "30px", height: "30px", marginRight: "20px" }}
              />
              <img
                src={Glogo}
                style={{ width: "30px", height: "30px", marginRight: "20px" }}
              />
              <img
                src={Tlogo}
                style={{ width: "30px", height: "30px", marginRight: "20px" }}
              />
              <img
                src={TuLogo}
                style={{ width: "30px", height: "30px", marginRight: "20px" }}
              />
            </Grid>
          </Grid>
          <Grid container direction="row"
            justify="center"
            alignItems="center" spacing={3}>
        <Grid item xs={6} className={classes.widthGrid}>
          <div className='terms'>
            <p className='item1'>Serach Terms</p>
            <p className='item1'>Advanced Search</p>
            <p className='item1'>Orders and Returns</p>
            <p>Consultant</p>
            <p>Help {'&'} FAQs</p>
          </div>
        </Grid>
        </Grid>
        </div>
        
      </div>
    </div>
  );
};

export default Footer;
