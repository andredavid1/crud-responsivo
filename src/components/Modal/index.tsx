import React, { useState, useEffect } from 'react';

import ReactModal from 'react-modal';

// interface ICategory {
//   id: number;
//   name: string;
// }

interface IModalProps {
  children: any;
  isOpen: boolean;
  setIsOpen: () => void;
}

const Modal: React.FC<IModalProps> = ({ children, isOpen, setIsOpen }) => {
  const [modalStatus, setModalStatus] = useState(isOpen);

  useEffect(() => {
    setModalStatus(isOpen);
  }, [isOpen]);

  return (
    <ReactModal
      shouldCloseOnOverlayClick={!false}
      onRequestClose={setIsOpen}
      isOpen={modalStatus}
      ariaHideApp={false}
      style={{
        content: {
          background: '#F0F0F5',
          border: 'none',
          borderRadius: '8px',
          bottom: 'auto',
          color: '#000000',
          left: '50%',
          marginRight: '-50%',
          maxWidth: '800px',
          padding: 0,
          right: 'auto',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          width: '90%',
        },
        overlay: {
          backgroundColor: '#121214e6',
        },
      }}
    >
      {children}
    </ReactModal>
  );
};

export default Modal;
