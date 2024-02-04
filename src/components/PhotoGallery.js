import React, { useState } from "react";
import "./PhotoGallery.css";

const PhotoGallery = ({ photos }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const handleClickOutside = (e) => {
    if (e.target.classList.contains("lightbox")) {
      closeLightbox();
    }
  };

  const showNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const showPrev = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + photos.length) % photos.length
    );
  };

  return (
    <div className="gallery-container">
      <div className="gallery-row">
        {photos.map((photo, index) => (
          <div
            className="gallery-col"
            key={index}
            onClick={() => openLightbox(index)}
          >
            <img
              src={photo.fullsize}
              alt={`Thumbnail ${index}`}
              className="gallery-image"
            />
          </div>
        ))}
      </div>

      {lightboxOpen && (
        <div className="lightbox" onClick={handleClickOutside}>
          <span className="lightbox-close" onClick={closeLightbox}>
            &times;
          </span>
          <img
            src={photos[currentImageIndex].thumbnail}
            alt="Enlarged pic"
            className="lightbox-image"
          />
          <span className="lightbox-prev" onClick={showPrev}>
            &lsaquo;
          </span>
          <span className="lightbox-next" onClick={showNext}>
            &rsaquo;
          </span>
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;
