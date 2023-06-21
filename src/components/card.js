import '../Styles/card.css';
import React, {useState} from 'react';
import Modal from './Modal'

export default function Card({foo}) {
  const [modalOpen, setModalOpen] = useState(false);
  return (
      <div  className="foodLocation">
        <h3> {foo["name"]} </h3>
        <h3 className="med"> {foo["address"]["buildingName"]} </h3>
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
