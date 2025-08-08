import React, { useState } from 'react';
import './Service.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import Services_Data from '../../assets/services_data.js';
import Complet from '../../assets/complet.js';
import arrow_icon from '../../assets/arrow_icon.svg';
import Modal from '../Modal/Modal.jsx';

const Services = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const handleClick = (index) => {
    const baseData = Services_Data[index];
    const extraData = Complet[index];

    setSelectedService({ ...baseData, ...extraData }); 
    setShowPopup(true);
  };
  return (
    <div id="services" className="services" translate="no">
      <div className={`services-content ${showPopup ? 'blurred' : ''}`}>
        <div className="services-title">
          <h1>Serviços</h1>
          <img src={theme_pattern} alt="" />
        </div>

        <div className="services-container">
          {Services_Data.map((service, index) => (
            <div
              key={index}
              className="services-format"
                onClick={() => handleClick(index)}
            >
              <h3>{service.s_no}</h3>
              <h2>{service.s_name}</h2>
              <p>{service.s_desc}</p>
              <div className='services-readmore'>
                <p>Ler Mais</p>
                <img src={arrow_icon} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>

      
      {showPopup && selectedService && (
        <Modal onClose={() => setShowPopup(false)}>
          <h2>{selectedService.s_name}</h2>
          <p>{selectedService.s_desc}</p>
          <p><strong>Detalhes:</strong> {selectedService.details}</p>
        </Modal>
      )}
    </div>
  );
};

export default Services;
