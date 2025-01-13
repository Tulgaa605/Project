import React, { useState } from 'react';
import styles from "./MasonryBox.module.css";
import { PropTypes } from 'prop-types';

// MasonryBox component
const MasonryBox = ({ wallSrc, userName }) => {
  // State for handling the modal visibility and image source
  const [isOpen, setIsOpen] = useState(false);
  const [zoomedImage, setZoomedImage] = useState("");

  const openModal = (src) => {
    setZoomedImage(src);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className={styles["my-masonry"]}>
      <img 
        src={wallSrc} 
        style={{ width: "100%" }} 
        alt="wall" 
        onClick={() => openModal(wallSrc)} 
      />
      
      <div className={`${styles["my-masnry-description"]} flex`}>
        <div className={`${styles["my-masnry-user-box"]} flex align-items-center`}>
          <div className={`${styles["my-masnry-user-prof-desc"]} flex flex-column`}>
            <h1>{userName}</h1>
          </div>
        </div>
      </div>

      {/* Modal for displaying zoomed-in image */}
      {isOpen && (
        <div className={styles["modal"]} onClick={closeModal}>
          <img src={zoomedImage} className={styles["zoomed-image"]} alt="Zoomed" />
        </div>
      )}
    </div>
  );
};

// validate MasonryBox component
MasonryBox.propTypes = {
  wallSrc: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
}

export default MasonryBox;
