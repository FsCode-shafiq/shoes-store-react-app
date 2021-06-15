import "./Aboutus.css";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import shoeData from "../contextApi";
import { useContext } from "react";
import Paper from "@material-ui/core/Paper";
import book from "./icons/book.png";
import bookmark from "./icons/bookmark.png";
import pin from "./icons/pin.png";
import education from "./icons/education.png";
import plane from "./icons/plane.png";
import chat from "./icons/chat.png";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));
const CreatShoe = () => {
  const createShoeData = useContext(shoeData);
  const classes = useStyles();

  return (
    <div className="create-shoe-main">
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <h1 className="heading3">CREATE SHOES</h1>
          </Grid>
        </Grid>
      </div>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <h1 className="heading4">Wear it anywhere, anyway.</h1>
          </Grid>
        </Grid>
      </div>
      <div className={classes.root}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={1}
        >
          {createShoeData.map((ele, ind) => {
            if (ind > 27 && ind <= 30) {
              return (
                <Grid item xs={3}>
                  <img src={ele.media.thumbUrl} />
                </Grid>
              );
            }
          })}
        </Grid>
      </div>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <h1 className="heading5">LIVE LIFE TO THE FULLEST</h1>
          </Grid>
        </Grid>
      </div>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <h1 className="heading6">
              Life is 20% what happens to us and 80% how we react to it
            </h1>
          </Grid>
        </Grid>
      </div>
      <div className={classes.root}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={3}
        >
          <Grid item xs={9}>
            <p className="para5">
              Quisque volutpat mattis eros. Nullam malesuada erat ut ki diaml ka
              dhuddu pochu turpis. Suspendisse urna nibh,viverra non, semper
              suscipit, posuere a, pede. Donec nec justo eget felis facilisis
              fermentum. Aliquam porttitor mauris
            </p>
          </Grid>
        </Grid>
      </div>
      <div className={classes.root}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={3}
        >
          <Grid item xs={5}>
            <Paper className={classes.paper}>
              <div className={classes.root}>
                <Grid container spacing={1}>
                  <Grid item xs={1}>
                    <img src={book} className="icons" />
                  </Grid>
                  <Grid item xs={4}>
                    <h1 className="heading7">
                      Get committed to a new lifestyle
                    </h1>
                    <div className="icon-para">
                      Aenean dignissim pellentesque felis. There are many
                      variations of passages of Lorem Ipsum available, but the
                      majority have suffered alteration in some form, by
                      injected humour.
                    </div>
                  </Grid>
                </Grid>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={5}>
            <Paper className={classes.paper}>
              <div className={classes.root}>
                <Grid container spacing={1}>
                  <Grid item xs={1}>
                    <img src={chat} className="icons" />
                  </Grid>
                  <Grid item xs={4}>
                    <h1 className="heading7">Take time off to cool off</h1>
                    <div className="icon-para">
                      Aenean dignissim pellentesque felis. There are many
                      variations of passages of Lorem Ipsum available, but the
                      majority have suffered alteration in some form, by
                      injected humour.
                    </div>
                  </Grid>
                </Grid>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={5}>
            <Paper className={classes.paper}>
              <div className={classes.root}>
                <Grid container spacing={1}>
                  <Grid item xs={1}>
                    <img src={education} className="icons" />
                  </Grid>
                  <Grid item xs={4}>
                    <h1 className="heading7">Get into shape by exercising</h1>
                    <div className="icon-para">
                      Aenean dignissim pellentesque felis. There are many
                      variations of passages of Lorem Ipsum available, but the
                      majority have suffered alteration in some form, by
                      injected humour.
                    </div>
                  </Grid>
                </Grid>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={5}>
            <Paper className={classes.paper}>
              <div className={classes.root}>
                <Grid container spacing={1}>
                  <Grid item xs={1}>
                    <img src={pin} className="icons" />
                  </Grid>
                  <Grid item xs={4}>
                    <h1 className="heading7">Learn to enjoy your life</h1>
                    <div className="icon-para">
                      Aenean dignissim pellentesque felis. There are many
                      variations of passages of Lorem Ipsum available, but the
                      majority have suffered alteration in some form, by
                      injected humour.
                    </div>
                  </Grid>
                </Grid>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={5}>
            <Paper className={classes.paper}>
              <div className={classes.root}>
                <Grid container spacing={1}>
                  <Grid item xs={1}>
                    <img src={bookmark} className="icons" />
                  </Grid>
                  <Grid item xs={4}>
                    <h1 className="heading7">
                      Rebuild your wardrobe
                    </h1>
                    <div className="icon-para">
                      Aenean dignissim pellentesque felis. There are many
                      variations of passages of Lorem Ipsum available, but the
                      majority have suffered alteration in some form, by
                      injected humour.
                    </div>
                  </Grid>
                </Grid>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={5}>
            <Paper className={classes.paper}>
              <div className={classes.root}>
                <Grid container spacing={1}>
                  <Grid item xs={1}>
                    <img src={plane} className="icons" />
                  </Grid>
                  <Grid item xs={4}>
                    <h1 className="heading7">
                      Soar into the sky
                    </h1>
                    <div className="icon-para">
                      Aenean dignissim pellentesque felis. There are many
                      variations of passages of Lorem Ipsum available, but the
                      majority have suffered alteration in some form, by
                      injected humour.
                    </div>
                  </Grid>
                </Grid>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default CreatShoe;

