import React from 'react';
function ImagePopup({ selectedCard, onClose }) {

  return (
    <section className={`popup popup_photo ${Object.entries(selectedCard).length !== 0 ? ' popup_opened' : ''}`}>
      <figure className="popup__photo-block">
        <button type="reset" className="popup-close popup-close_card" aria-label="close" onClick={onClose}></button>
        <img className="popup__photo" src={selectedCard ? selectedCard.link : '#'} alt={selectedCard.name} />
        <figcaption className="popup__caption">{selectedCard.name}</figcaption>
      </figure>
    </section>
  );
}

export default ImagePopup;


