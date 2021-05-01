function PopupWithForm({ title, name, children }) {
    return (
        <section className={`popup popup_${name}`}>
            <form className={`popup__form popup__form_${name}`} name="userProfileForm" noValidate>
                <button type="reset" className="popup-close" aria-label="close"></button>
                <h2 className={`popup__title popup__title_${name}`}>{title}</h2>
                {children}
            </form>
        </section>
    );
}

export default PopupWithForm;


















