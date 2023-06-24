import '../Styles/card.css';
import React, {useState} from 'react';
import Modal from './Modal'
import Slider from './Slider';

export default function Card({foo}) {
  const [modalOpen, setModalOpen] = useState(false);

  const images = [
    'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
    'https://images.unsplash.com/photo-1470341223622-1019832be824?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2288&q=80',
    'https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2094&q=80',
    'https://images.unsplash.com/photo-1534161308652-fdfcf10f62c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2174&q=80'
  ]
  

  return (
      <div className="foodLocation">
        <div className='title'>
          <h3> {foo["name"]} </h3>
          <h3 className="med"> {foo["address"]["buildingName"]} </h3>
        </div>

        <Slider slides={images}/>

        <p>{foo["description"].substring(0,100) + "..."}</p>

        <ul className='tags'>
          {foo["tags"].map(tag => {return (<li>{tag}</li>)})}
        </ul>

        <p>Rating: {foo["rating"]}</p>
          <button
            className="openModalBtn"
            onClick={() => {
              setModalOpen(true);
            }}
          >Find out more!</button>
        {modalOpen && <Modal setOpenModal={setModalOpen} foo = {foo}/>}  
      </div>
  );
}
