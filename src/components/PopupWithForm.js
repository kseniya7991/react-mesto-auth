import React from 'react';

function PopupWithForm({ title, name, children, isOpen, onClose, buttonValue, onSubmit}) {



    return (
        <section className={`popup popup_${name} ${isOpen ? ' popup_opened' : ''}`}>
            <form className={`popup__form popup__form_${name}`} name="userProfileForm" noValidate onSubmit={onSubmit} >
                <button type="reset" className="popup-close" aria-label="close" onClick={onClose}></button>
                <h2 className={`popup__title popup__title_${name}`}>{title}</h2>
                {children}
                <button type="submit" formTarget="_self" className={`popup__save-button popup__save-button_${name}`} aria-label="save" value={buttonValue}>{buttonValue}</button>
            </form>
        </section>
    );
}

export default PopupWithForm;


















