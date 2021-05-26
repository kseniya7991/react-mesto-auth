import React, { useEffect } from 'react';
import keyClose from '../utils/constants';

function Register() {

    return (
        <section className="sign">
            <form className="sign__form sign__form_up" name="sign-up" noValidate>
                <div>
                <h2 className="sign__title">Регистрация</h2>
                <section className="sign__input-section">
                    <input className="sign__input" id="email" name="email" type="email" placeholder="Email" required />
                    <input className="sign__input" id="password" name="password" type="password" placeholder="Пароль" required />
                </section>
                </div>
                <button type="submit" formTarget="_self" className="sign__save-button">Зарегистрироваться</button>
            </form>
        </section>
      /*   <section className={`popup popup_${name} ${isOpen ? ' popup_opened' : ''}`} onClick={handleOverlayClick} >
            <form className={`popup__form popup__form_${name}`} name="userProfileForm" noValidate onSubmit={onSubmit} >
                <button type="reset" className="popup-close" aria-label="close" onClick={onClose}></button>
                <h2 className={`popup__title popup__title_${name}`}>{title}</h2>
                {children}
                <button type="submit" formTarget="_self" className={`popup__save-button popup__save-button_${name}`} aria-label="save" value={buttonValue}>{buttonValue}</button>
            </form>
        </section> */

        /* <section className="popup__input-section">
        <input className="popup__input popup__input_link_avatar" id="link-avatar" name="AvatarLink" type="url" placeholder="Ссылка на фото" required ref={avatarRef} dafaultValue={currentUser.avatar || ''} onChange={isEmpty} />
        <span className="popup__input-error" id="link-avatar-error"></span>
    </section> */
    );
}

export default Register;

{/*  <Switch>
      <Route path="/sign-up"></Route>
      <Route path="/sign-in"></Route>
    </Switch> */}