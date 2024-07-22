import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

const AgeModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    Modal.setAppElement('#root');
  }, []);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Age Verification"
    >
      <h2>Você tem mais de 18 anos?</h2>
      <button onClick={closeModal}>Sim</button>
      <button onClick={closeModal}>Não</button>
    </Modal>
  );
};

export default AgeModal;
