import '../Styles/card.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import React, {useState} from 'react';
import Calistoga from '../Styles/fonts/Calistoga-Regular.ttf';
import { Foodscroller } from './Foodscroller';
//import Modal from './Modal'
//import Slider from './Slider';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  backgroundColor: '#FDF5DC',
  border: '4px solid #A72608',
  borderRadius: 3,
  boxShadow: 24,
  p: 4,
};

export default function Card({foo}) {
  //const [modalOpen, setModalOpen] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
      <div className="foodLocation">
        <div className='title'>
          <h3> {foo["name"]} </h3>
          <h3 className="med"> {foo["address"]["buildingName"]} </h3>
        </div>
        <ul className='tags'>
          {foo["tags"].map(tag => {return (<li key={foo["name"]}>{tag}</li>)})}
        </ul>

        <p className='rating'> Rating: {foo["rating"]} </p> 
        <Button onClick={handleOpen} className='findoutmore'>Find out more</Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <h5>
                {foo["name"]}
              </h5>
              <br></br>
              <h6>
                {foo["description"]}
              </h6>
              <br></br>
              <h6>
                Nearest MRT station: {foo["nearestMrtStation"]}
              </h6>
              <br></br>
              <h6>
                Ammenities: {foo["ammenities"] ? foo["ammenities"] : "NIL"}
              </h6>
              <div className='reviews'>
              <p className='reviews-heading'>
                Reviews : 
                {foo["reviews"] 
                ? foo["reviews"].map(review => 
                  {return <><p className='reviews-per'>"{review["text"]}" </p><p className='reviews-author'>by {review["authorName"]}</p></>})
                : <p className='reviews-per'>No reviews found</p>}
              </p></div>
            </Box>
          </Modal>
      </div>
  );
}
