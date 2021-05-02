import React from 'react';

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
    </section>
  );
}

export default ImagePopup;
