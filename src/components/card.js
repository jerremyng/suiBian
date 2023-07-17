import '../Styles/card.css';
import React, {useState} from 'react';
import Modal from './Modal'
//import Slider from './Slider';

export default function Card({foo}) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
      <div className="foodLocation">
        <div className='title'>
          <h3> {foo["name"]} </h3>
          <h3 className="med"> {foo["address"]["buildingName"]} </h3>
        </div>

        {/* <Slider slides={foo['images']}/> */}

        <p>{foo["description"].substring(0,100) + "..."}</p>

        <ul className='tags'>
          {foo["tags"].map(tag => {return (<li>{tag}</li>)})}
        </ul>

        <p>Rating: {foo["rating"]} ({Object.keys(foo['reviews']).length == 0 ? "No" : Object.keys(foo['reviews']).length} reviews)</p>

          <button
            className="openModalBtn"
            onClick={() => {
              setModalOpen(!modalOpen);
            }}
          >Find out more!</button>
        {modalOpen && <Modal setOpenModal={setModalOpen} foo = {foo}/>}  
      </div>
  );
}
