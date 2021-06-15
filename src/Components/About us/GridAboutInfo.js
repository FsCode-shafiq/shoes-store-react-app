import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import shoeData from "../contextApi";
import { useContext } from "react";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const AboutInfo = () => {
  const classes = useStyles();
  const aboutData = useContext(shoeData);
  return (
    <div className={classes.root}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={3}
      >
        <Grid item xs={3} className="grid-div-one">
          <img src={aboutData[27].media.smallImageUrl} className="image"></img>
        </Grid>
        <Grid item xs={5} className="grid-div-two">
          <div className="info-main">
            <h2 className="heading1">A WORD ABOUT OUR SHOES</h2>
            <p className="para1">
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry’s standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book.
            </p>
            <h2 className="heading1">Best of all sports shoes</h2>

            <div className="info-inner">
              <div className={classes.root}>
                <Grid container direction="row" spacing={3}>
                  <Grid item xs={7}>
                    <p className="para2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud.
                    </p>
                  </Grid>
                  <Grid item xs={5}>
                    <p className="para3">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed tempor and vitality, so that the labor and sorrow,
                      some important things to do eiusmod
                    </p>
                  </Grid>
                </Grid>
              </div>
            </div>
            <p className="para1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default AboutInfo;
