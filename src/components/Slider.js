import React, { useState } from 'react'
import '../Styles/slider.css'

export default function Slider({slides}) {

  // async function fetchImg({uuid}) {
  //   try{
  //     const res = await fetch(`https://api.stb.gov.sg/media/download/v2/${uuid.substring(0,9)}`,
  //     {
  //       method: "GET",
  //       headers : {
  //         'X-API-Key': 'waMGfQ1HV5gAA7emOObvMXDOHQXnpeQE',
  //         // 'Content-Type': 'application/json'
  //       }
  //     }).then(response => response.blob())
  //     .then(blob => URL.createObjectURL(blob))
  //     .then(url => setImg(url));

  //     return res;

  //   }
  //   catch(e){
  //     console.log(e);
  //   }
  // }

  const [state, setState] = useState({
    position: 0,
    transition: 0.45
  })

  const { position, transition } = state

  return(
    <div class='slider'>
      {/* <div class='slide-container' style={{translate:{position},transition:'ease-out 0.45s'}}> */}
      <div class='slide-container'>
        <img src={require('../assets/acai.jpeg')}/>
            {/* {slides = undefined
            ? <div/>
            : slides.map(slide => <img src={slide['url']}/>)}  */}
        </div>
  </div>
  )
}
