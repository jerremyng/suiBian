import React, { useState } from 'react'
import '../Styles/slider.css'

export default function Slider({slides}) {

  const [state, setState] = useState({
    position: 0,
    transition: 0.45
  })

  const { position, transition } = state

  return(
    <div class='slider'>
      <div class='slide-container' style={{translate:{position},transition:'ease-out 0.45s'}}>
          {slides.map(slide => {
            return <img src={slide} />    
          })}
        </div>
  </div>
  )
}
