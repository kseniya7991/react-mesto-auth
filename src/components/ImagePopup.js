import React from 'react';

<<<<<<< HEAD
function ImagePopup({ selectedCard, onClose }) {
  let src = "#";
  if (selectedCard !== "") src = selectedCard.link;

  return (
    <section className={`popup popup_photo` + (selectedCard !== "" ? ' popup_opened' : '')}>
      <figure className="popup__photo-block">
        <button type="reset" className="popup-close popup-close_card" aria-label="close" onClick={onClose}></button>
        <img className="popup__photo" src={src} alt={selectedCard.title} />
        <figcaption className="popup__caption">{selectedCard.title}</figcaption>
      </figure>
=======
function ImagePopup({selectedCard, onClose}) {
  
  return (
    <section className={`popup popup_photo ${Object.entries(selectedCard).length !== 0 ? ' popup_opened' : ''}`}>
        <figure className="popup__photo-block">
            <button type="reset" className="popup-close popup-close_card" aria-label="close" onClick={onClose}></button>
            <img className="popup__photo" src={selectedCard ? selectedCard.link : '#' } alt={selectedCard.name} />
            <figcaption className="popup__caption">{selectedCard.name}</figcaption>
        </figure>
>>>>>>> develop
    </section>
  );
}

export default ImagePopup;


/* Object.entries(selectedCard).length */