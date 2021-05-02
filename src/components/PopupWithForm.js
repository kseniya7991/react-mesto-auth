import React from 'react';

function PopupWithForm({ title, name, children, isOpen, onClose}) {
    return (
        <section className={`popup popup_${name}` + (isOpen ? ' popup_opened' : '')}>
            <form className={`popup__form popup__form_${name}`} name="userProfileForm" noValidate>
                <button type="reset" className="popup-close" aria-label="close" onClick={onClose}></button>
                <h2 className={`popup__title popup__title_${name}`}>{title}</h2>
                {children}
            </form>
        </section>
    );
}

export default PopupWithForm;


















