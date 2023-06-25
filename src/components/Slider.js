import React, { useState } from 'react'
import '../Styles/slider.css'

export default function Slider({slides}) {


  async function fetchImg({uuid}) {
    try{
      const res = await fetch(`https://api.stb.gov.sg/media/download/v2/${uuid.substring(0,9)}`,
      {
        method: "GET",
        headers : {
          // 'ApiEndPointTitle':'Search Food and Beverages By Keyword or UUIDs',
          'X-API-Key': 'waMGfQ1HV5gAA7emOObvMXDOHQXnpeQE',
          // 'Content-Type': 'application/json'
        }
      });
      console.log(res)
      const data = await res;
      return data;
    }
    catch(e){
      console.log(e);
    }
  }

  const [state, setState] = useState({
    position: 0,
    transition: 0.45
  })

  const { position, transition } = state

  return(
    <div class='slider'>
      <div class='slide-container' style={{translate:{position},transition:'ease-out 0.45s'}}>
          {slides.map(slide => {
            return <img src={(fetchImg(slide)['url'])} />    
          })}
        </div>
  </div>
  )
}
