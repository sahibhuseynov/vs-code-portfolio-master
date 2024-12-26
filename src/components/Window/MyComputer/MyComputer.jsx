import React, { useState } from 'react';
import './MyComputer.scss';
import MycomputerIcon from '../../../assets/mycomputer.png';
const MyComputer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleOpenCV = () => setIsCVModalOpen(true);
  const handleCloseCV = () => setIsCVModalOpen(false);

  return (
    <div className="my-computer">
      {/* My Computer Icon */}
      <div className="computer-icon" onDoubleClick={handleOpenModal}>
        <img src={MycomputerIcon} alt="My Computer" />
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-header">
            <div className="modal-title">My Computer</div>
            <div className="window-controls">
              <button className="close-btn" onClick={handleCloseModal}>X</button>
            </div>
          </div>
          <div className="modal-content">
            <ul>
              {/* Klasörler */}
              <li className="folder-item" onClick={handleOpenCV}>
                <div className="item-icon">📂</div>
                <span>CV</span>
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* CV Modal */}
      {isCVModalOpen && (
        <div className="modal">
          <div className="modal-header">
            <div className="modal-title">CV</div>
            <div className="window-controls">
              
              <button className="close-btn" onClick={handleCloseCV}>X</button>
            </div>
          </div>
          <div className="cv-modal-content">
            <iframe 
              src="/path/to/your-cv.pdf" 
              title="CV"
              frameBorder="0"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyComputer;
