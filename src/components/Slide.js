import React, { useState } from 'react'
import '../Styles/slider.css'

export default function Slide({uuid}) {

  const [img, setImg] = useState();

  async function fetchImg({uuid}) {
    try{
      const res = await fetch(`https://api.stb.gov.sg/media/download/v2/${uuid.substring(0,9)}`,
      {
        method: "GET",
        headers : {
          'X-API-Key': 'waMGfQ1HV5gAA7emOObvMXDOHQXnpeQE',
          // 'Content-Type': 'application/json'
        }
      }).then(response => response.blob())
      .then(blob => URL.createObjectURL(blob))
      .then(url => setImg(url));
    }
    catch(e){
      console.log(e);
    }
  }

  fetchImg(uuid);

  return(
    <img src={img} />
  )
}
