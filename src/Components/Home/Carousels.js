import { useContext } from "react";
import { Carousel } from "react-bootstrap";
import shoeData from "../contextApi";
import "./Carousel.css";
const CarouselsComp = () => {
  const CarouselData = useContext(shoeData);

  console.log("Carsouel data", CarouselData);
  return (
    <Carousel className="carsel">
      {CarouselData.map((ele, ind) => {
        if (ind <= 10) {
          return (
            <Carousel.Item style={{ height: "600px" }}>
              <img
                className="d-block w-50"
                src={ele.media.imageUrl}
                alt={ele.brand}
              />
              <Carousel.Caption className='caption'>
                <div>
              <h3 className="name" >{ele.name}</h3>
                <p className="title" >{ele.title}</p>
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
