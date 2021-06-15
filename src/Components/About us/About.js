import './Aboutus.css';
import CreatShoe from './GridCreateShoe';
import AboutInfo from './GridAboutInfo';
const About = ()=>{
    
    return(
        <div>
            <div className='div-one'><h3>About Us</h3></div>
            <div className='div-two'>
                <AboutInfo></AboutInfo>
            </div>
            <div className='div-three'>
                <CreatShoe/>
            </div>
        </div>
        
    );
}

export default About;