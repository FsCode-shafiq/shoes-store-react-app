import shoeData from "../contextApi";
import { useContext } from "react";
import {Carousel} from 'react-bootstrap';
import './CarsouselPlus.css';
import { NavLink } from "react-router-dom";
const linkStyle = {
    textDecoration: "none",
  };
const CarsouselPlus =()=>{
    const CarsouselPlusData = useContext(shoeData)
    return(
        <Carousel fade className='carPlus'>
            {
                CarsouselPlusData.map((ele,ind)=>{
                    if (ind>14 && ind<=20) {
                        return  <Carousel.Item key={ind} className='carPlus-img'>
                    
                        <img
                        
                          className="d-block w-100 h-70"
                          src={ele.media.smallImageUrl}
                          alt="First slide"
                        />
                        <Carousel.Caption className='carPlus-caption' style={{color:'white'}}>
                        <NavLink
                      style={linkStyle}
                      to={`/product/${ind}`}
                      activeStyle={{
                        color: "white",
                      }}
                    >
                      <h3 style={{color:'white'}}>{ele.brand}</h3>
                          <p style={{color:'white'}}>{ele.title}</p>
                    </NavLink>
                          
                        </Carousel.Caption>
                      </Carousel.Item>
                    }
                })
            } 
</Carousel>
    );
}
export default CarsouselPlus;
