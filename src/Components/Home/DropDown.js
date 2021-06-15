import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import Grow from "@material-ui/core/Grow";
import Grid from "@material-ui/core/Grid";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { useContext } from "react";
import shoeData from "../contextApi";
import "./DropDown.css";
import { NavLink } from "react-router-dom";
const linkStyle = {
  textDecoration: "none",
  color: 'black'
};
const useStyles2 = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const DropDown = () => {
  const GridData = useContext(shoeData);

  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };
  const useStyles1 = makeStyles((theme) => ({
    root: {
      height: checked ? 180 : 0,
    },
    container: {
      display: "flex",
    },
    paper: {
      margin: theme.spacing(1),
    },
    svg: {
      width: 100,
      height: 0,
    },
    polygon: {
      fill: theme.palette.common.white,
      stroke: theme.palette.divider,
      strokeWidth: 1,
    },
  }));
  const useStyles3 = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: checked ? 140 : 0,
    },
  });
  const classes3 = useStyles3();
  const classes2 = useStyles2();
  const classes1 = useStyles1();
  return (
    <div className={classes1.root}>
      <FormControlLabel
        className="head"
        control={
          <Button
            variant="contained"
            color="primary"
            size="large"
            checked={checked}
            onClick={handleChange}
          >
            Click to see New Arrivals!
          </Button>
        }
      />
      <div className={classes1.container}>
        <div className={classes2.root}>
          <Grid container spacing={3}>
            
            <Grid item xs={2}>
              <Grow in={checked}>
                <Card className={classes3.root}>
                  <CardActionArea>
                    <CardMedia
                      className={classes3.media}
                      image={GridData[21].media.thumbUrl}
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="h2">
                      <NavLink
                      style={linkStyle}
                      to={`/product/${21}`}
                    >
                      {GridData[21].brand}
                    </NavLink>
                        
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grow>
            </Grid>

            {GridData.map((ele, ind) => {
              if (ind > 21 && ind <= 26) {
                var time = 0;
                time += 1000;
                return (
                  <Grid item xs={2}>
                    <Grow in={checked}>
                      <Card
                        className={classes3.root}
                        style={{ transformOrigin: "0 0 0" }}
                        {...(checked ? { timeout: 1000 } : {})}
                      >
                        <CardActionArea>
                          <CardMedia
                            className={classes3.media}
                            image={ele.media.thumbUrl}
                            title="Contemplative Reptile"
                          />
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="h2"
                            >
                              <NavLink
                      style={linkStyle}
                      to={`/product/${ind}`}
                    >
                       {ele.brand}
                    </NavLink>
                             
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Grow>
                  </Grid>
                );
              }
            })}
          </Grid>
        </div>
      </div>
    </div>
  );
};
export default DropDown;
