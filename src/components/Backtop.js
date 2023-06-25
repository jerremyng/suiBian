import '../Styles/card.css';
import React, {useState} from 'react';

export default function Backtop() {
  function goToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};

  return (
    <button onClick={goToTop}></button>
  );
}
