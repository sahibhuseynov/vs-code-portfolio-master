import React, { useState } from 'react';
import './RecycleBin.scss';
import RecycleImg from "../../../assets/recycleIcon.png";

const RecycleBin = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deletedItems, setDeletedItems] = useState([]);

  // Rastgele komik silinmiş öğeler
  const randomItems = [
    "Köhnə nəvə şəkli",
    "Silinmiş diplom işi",
    "Qapqara video faylı",
    "Yarımçıq qutab resepti",
    "Günəşi söndürən proqram",
    "Təsadüfən silinmiş gəlin şəkli",
    "Doğma kəndin xəritəsi",
    "Nənənin 20 dəfə yazdığı mesaj",
    "Ad günü tortunun şəkli (bitməmiş)",
    "Bir daha tapılmayan parol",
  ];
  // Modal açma
  const handleOpenModal = () => {
    const randomDeletedItems = [];
    for (let i = 0; i < 8; i++) {
      const randomIndex = Math.floor(Math.random() * randomItems.length);
      randomDeletedItems.push(randomItems[randomIndex]);
    }
    setDeletedItems(randomDeletedItems);
    setIsModalOpen(true);
  };

  // Modal kapama
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="recycle-bin">
      {/* Recycle Bin İkonu */}
      <div className="recycle-bin-icon" onDoubleClick={handleOpenModal}>
        <img src={RecycleImg} alt="Recycle Bin" />
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-header">
            <h2>Recycle Bin</h2>
            <button className="close-btn" onClick={handleCloseModal}>
              ✖
            </button>
          </div>
          <div className="modal-content">
            {deletedItems.length > 0 ? (
              <ul>
                {deletedItems.map((item, index) => (
                  <li key={index} className="deleted-item">
                    <span className="item-icon">📄</span>
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="empty-bin">Çöp kutusu boş!</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default RecycleBin;
