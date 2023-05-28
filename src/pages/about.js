import React from "react";
import "../Styles/about.css";
import Navbar from "../components/Navbar";
import { FaBookmark } from "react-icons/fa";
import ReactCardSlider from 'react-card-slider-component';

//images
import mala1 from '../assets/mala.jpeg';
import mala2 from '../assets/mala1.jpeg';
import mala6 from '../assets/mala6.webp';
import mala4 from '../assets/mala3.jpeg';
import mala5 from '../assets/mala4.webp';


const sliderClick = (slider)=>{
  alert("hello world");
}

const slides = [
  {image: mala1,title:"Mala Xiang Guo",description:"Woodlands St 12",clickEvent:sliderClick},
  {image: mala2,title:"Gong Yuan Mala",description:"NEX Shopping Mall",clickEvent:sliderClick},
  {image: mala6,title:"Eat Mala",description:"Loyang Point",clickEvent:sliderClick},
  {image: mala4,title:"Sichuan Delights",description:"Marina Bay Sands",clickEvent:sliderClick},
  {image: mala5,title:"Spicy Not Spicy",description:"Utown FoodClique",clickEvent:sliderClick}
]

function About() {
  return (
  <><React.Fragment>
      <Navbar/>
    </React.Fragment>

    <div className="about">
      <div className="aboutBottom">
        <h1> Mala Tang</h1>
        <button className="save">
          <FaBookmark/> Save it!
        </button>
        <p>
          MalaTang is a popular dish originated from SiChuan. Singaporeans love to sweat it out with this hot and spicy dish. 
          <br></br>What's more, you can customise the ingredients in the dish!  
        </p>
        
        <h4> Locations to explore</h4>
          <div className="slides">
            <ReactCardSlider slides={slides}/>
          </div>
      </div>
    </div></>
  );
}

export default About;