import React from 'react';
import ModalVideo from 'react-modal-video';


const Modal = ({video_id, is_open, onClose}) => {
  return (
     <ModalVideo channel='youtube' isOpen={is_open} videoId={video_id} onClose={onClose} />
  );
}

export default Modal;