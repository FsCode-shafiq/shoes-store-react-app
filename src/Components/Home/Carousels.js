import { useContext } from "react";
import { Carousel } from "react-bootstrap";
import shoeData from "../contextApi";
import "./Carousel.css";
import { NavLink } from "react-router-dom";
const linkStyle = {
    textDecoration: "none",
  };
const CarouselsComp = () => {
  const CarouselData = useContext(shoeData);

  console.log("Carsouel data", CarouselData);
  return (
    <Carousel >
      {CarouselData.map((ele, ind) => {
        if (ind <= 10) {
          return (
            <Carousel.Item  key={ind} style={{ height: "600px" }}>
              <img
              
                className="d-block w-50"
                src={ele.media.imageUrl}
                alt={ele.brand}
              />
              <Carousel.Caption className='caption'>
                <div>
                <NavLink
          style={linkStyle}
          to={`/product/${ind}`}
          activeStyle={{
            color: "#5D15B4",
          }}
        >
         <h3 className="name" >{ele.name}</h3>
                <p className="title" >{ele.title}</p>
        </NavLink>
              
              </div>
                
              </Carousel.Caption>
            </Carousel.Item>
          );
        }
      })}
    </Carousel>
  );
};

export default CarouselsComp;
