import shoeData from "../contextApi";
import { useContext } from "react";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "./product.css";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { NavLink } from "react-router-dom";
const linkStyle = {
  textDecoration: "none",
};
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
const useStyles1 = makeStyles({
  root: {
    maxWidth: 355,
  },
  media: {
    height: 250,
  },
});
const Product = () => {
  const classes = useStyles();
  const classes1 = useStyles1();
  const productData = useContext(shoeData);
  return (
    <div className={classes.root}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={2}
      >
        {productData.map((ele, ind) => {
          return (
            <Grid key={ind} item xs={3}>
              <Card className={classes1.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes1.media}
                    image={ele.media.thumbUrl}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {ele.brand}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {ele.title}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" >
                    <NavLink
                      style={linkStyle}
                      to={`/product/${ind}`}
                      activeStyle={{
                        color: "#5D15B4",
                      }}
                    >
                      <span className="product-button">Veiw Product</span>
                    </NavLink>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Product;
