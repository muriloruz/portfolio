import React from 'react';
import './Modal.css'; 

const Modal = ({ onClose, children }) => {
  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup" onClick={(e) => e.stopPropagation()}>
        {children}
        <button className="modal-close-button" onClick={onClose}>
          Fechar
        </button>
      </div>
    </div>
  );
};

export default Modal;
