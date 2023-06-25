import React from "react";
import '../Styles/modal.css';

export default function Modal({setOpenModal, foo}) {
  return (
    <div className="modal" style={{backgroundImage:`/Users/yerremy/Desktop/suiBian/src/assets/acai.jpeg`}}>
        {/* <div className="titleCloseBtn"> */}
          {/* <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button> */}
        {/* </div> */}
        <div className="title">
          <h1>{foo["name"]}</h1>
        </div>
        <div className="body">
          <p>{foo["body"]}</p>
        </div>
        {/* <div className="footer"> */}
          {/* <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button>Continue</button> */}
        {/* </div> */}
      </div>
  );
}