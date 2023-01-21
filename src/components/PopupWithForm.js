const PopupWithForm = ({ buttonName, isOpen, name, title, onClose, children }) => {
  return (
    <section className={`popup popup_${name} ${isOpen ? 'popup_opened' : ''}`}>
      <div className={`popup__container-${name}`}>
        <button type="button" aria-label="закрыть попап"
          className={`popup__button-close popup__button-close_${name}`}
          onClick={onClose}></button>
        <form name="popupForm" className={`popup__form popup__form_place${name}`} noValidate>
          <h2 className={`popup__title-${name}`}>{title}</h2>
          {children}
          <button type="submit" className="popup__button">{!buttonName ? 'Сохранить' : 'Да'}</button>
        </form>
      </div>
    </section>
  )
}
export default PopupWithForm;