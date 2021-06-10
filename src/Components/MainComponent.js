import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import About from "./About us/About";
import Product from "./Products/Product";
import ProductItem from "./Product Items/ProductItem";
import Navbar from "./Navbar/Navbar";
import { useEffect } from "react";
const MainComponent = () => {
  useEffect(()=>{
    const fetchData = async()=>{
      const response = await fetch('https://v1-sneakers.p.rapidapi.com/v1/sneakers?limit=100', {
          method: "GET",
            headers: {
              "x-rapidapi-key": "8590fd2a06mshedac11f4703d28ep1631b3jsnc22317e6faa2",
          "x-rapidapi-host": "v1-sneakers.p.rapidapi.com",
          "useQueryString": true
            },
          
      });
      const data = await response.json();
      const dataArray = data.results;
      const filteredArray = dataArray.filter((val,ind)=>{
          if(val.media.imageUrl !==null){
              return val;
          }
      })
      console.log("Data array",dataArray);
      console.log(filteredArray);
  }
  
  fetchData();
  })
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:id" element={<ProductItem />} />
        </Routes>
      </Router>
    </div>
  );
};

export default MainComponent;
