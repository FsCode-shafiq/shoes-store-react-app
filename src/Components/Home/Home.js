import {useContext} from 'react';
import shoeData from '../contextApi';
import CarouselsComp from './Carousels';
import CPT from './carouselPlusThumble';
import './Home.css'
const Home = ()=>{
    let homeData = useContext(shoeData)
    console.log("home data", homeData);
    return(
        <div className='home-main-container'>
            <CarouselsComp></CarouselsComp>
            <CPT/>
        </div>
    );
}

export default Home;