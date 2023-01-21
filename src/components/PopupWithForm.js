const PopupWithForm = ({ buttonName, isOpen, name, title, onClose, children }) => {
  return (
    <section className={`popup popup_${name} ${isOpen ? 'popup_opened' : ''}`}>
      <div className={`popup__container popup__container-${name}`}>
        <button type="button" aria-label="закрыть попап"
          className={`popup__button-close popup__button-close_${name}`}
          onClick={onClose}></button>
        <h2 className="popup__title">{title}</h2>
        {children}
        <button type="submit" className="popup__button">{!buttonName ? 'Сохранить' : 'Да'}</button>
      </div>
    </section>
  )
}
export default PopupWithForm;