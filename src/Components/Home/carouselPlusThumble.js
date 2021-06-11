import { useContext } from "react";
import shoeData from "../contextApi";
import "./CPT.css";
import { Card } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
const CPT = () => {
  const thumbleAndCarourl = useContext(shoeData);
  const useStyles = makeStyles((theme) => ({
    root: {},
    paper: {
      padding: theme.spacing(0),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
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
                <Card
                  className="cardd"
                  key={ind}
                  style={{ width: "300px", height: "350px", marginTop: "15px" }}
                >
                  <Card.Img variant="top" src={ele.media.thumbUrl} />
                  <Card.Body>
                    <Card.Title>{ele.name}</Card.Title>
                    <Card.Text>{ele.title}</Card.Text>
                  </Card.Body>
                </Card>
              );
            }
          })}
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>xs=12 sm=6</Paper>
        </Grid>
      </Grid>
    </div>
    //     <div className="CPT-main">

    //       {/* <div className='thumblee'>
    //             <div className='thumble-item'>
    //             {

    // thumbleAndCarourl.map((ele,ind)=>{
    //     if (ind>10 && ind <=14) {
    //         return <Card key={ind} style={{ width: '350px' }}>
    //         <Card.Img variant="top"  src={ele.media.thumbUrl} />
    //         <Card.Body>
    //           <Card.Title>{ele.name}</Card.Title>
    //           <Card.Text>
    //             {ele.title}
    //           </Card.Text>
    //         </Card.Body>
    //       </Card>
    //     }
    // })
    // }
    //             </div>
    //             </div>
    //             <div className='carousell'>carousel</div> */}
    //     </div>
  );
};

export default CPT;
