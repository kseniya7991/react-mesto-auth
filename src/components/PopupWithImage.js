
function PopupWithImage() {
  return (
    <section className="popup popup_photo">
        <figure className="popup__photo-block">
            <button type="reset" className="popup-close popup-close_card" aria-label="close"></button>
            <img className="popup__photo" src="#" alt="#" />
            <figcaption className="popup__caption"></figcaption>
        </figure>
    </section>
  );
}

export default PopupWithImage;
