import { useContext } from "react";
import shoeData from "../contextApi";
import "./CPT.css";
import { Card } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CarsouselPlus from "./CarouselPlus";
import { NavLink } from "react-router-dom";
const linkStyle = {
  textDecoration: "none",
};
const CPT = () => {
  const thumbleAndCarourl = useContext(shoeData);
  const useStyles = makeStyles((theme) => ({
    root: {},
    
  }));
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid
          container
          container
          direction="row"
          justify="space-evenly"
          alignItems="flex-start"
          style={{
            flexWrap: "wrap",
            background: "linear-gradient(to bottom, #ffcc00 0%, #ffcccc 100%)",
          }}
          item
          xs={12}
          sm={6}
        >
          {thumbleAndCarourl.map((ele, ind) => {
            if (ind > 10 && ind <= 14) {
              return (
                <NavLink
                      style={linkStyle}
                      to={`/product/${ind}`}
                      activeStyle={{
                        
                      }}
                    >
                      <Card
                  className="cardd"
                  key={ind}
                  style={{ width: "300px", height: "350px", marginTop: "15px" }}
                >
                  <Card.Img variant="top" src={ele.media.thumbUrl} />
                  <Card.Body>
                    <Card.Title style={{color: 'black'}}>{ele.name}</Card.Title>
                    <Card.Text style={{color: 'black'}}>{ele.title}</Card.Text>
                  </Card.Body>
                </Card>
                    </NavLink>
                
              );
            }
          })}
        </Grid>
        <Grid item xs={12} sm={6}>
          <CarsouselPlus/>
        </Grid>
      </Grid>
    </div>
  );
};

export default CPT;
