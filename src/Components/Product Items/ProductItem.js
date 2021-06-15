import { useContext } from "react";
import { useParams } from "react-router-dom";
import shoeData from "../contextApi";
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Button } from "@material-ui/core";
import Modal from 'react-bootstrap/Modal';
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Congratulation!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        
        <p>
          Your Order has been placed successfully
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));
const ProductItem = ()=>{
    const {id} = useParams()
    const PIData = useContext(shoeData);
    const classes = useStyles();
    const [modalShow, setModalShow] = React.useState(false);
    return(
        <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <img style={{width: '700px'}} src={PIData[id].media.imageUrl}/>
          </Grid>
          <Grid item xs={6}>
            <div className='detail-div'>
            <h1 className='heading8'>Details:</h1>
            <p className='para4'><span className='span-heading'>Brand: </span>{PIData[id].brand}</p>
            <p className='para4'><span className='span-heading'>Name: </span>{PIData[id].name}</p>
            <p className='para4'><span className='span-heading'>Title: </span>{PIData[id].title}</p>
            <p className='para4'><span className='span-heading'>Released Date: </span>{PIData[id].year}</p>
            <p className='para4'><span className='span-heading'>Brand-ID: </span>{PIData[id].id}</p>
            </div>
          </Grid>
          <Grid item xs={6}>
          <div className={classes.root} style={{paddingTop: '110px'}}>
      <Grid container direction="column"
  justify="flex-end"
  alignItems="flex-end" spacing={1}>
        <Grid item xs={4}>
        <p className='para4'><span className='span-heading'>Price: </span>${PIData[id].retailPrice}</p>
        </Grid>
        <Grid item xs={4}>
            <Button style={{width: '150px' , height: '40px' , marginRight: '-30px' , marginTop: '-40px'}}><span className='purchase' onClick={() => setModalShow(true)}>
                Purchase</span></Button>
        </Grid>
        </Grid>
    </div>
          </Grid>
        </Grid>
        <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      </div>
    )
}

export default ProductItem;