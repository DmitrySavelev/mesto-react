import PopupWithForm from "./PopupWithForm";

const AddPlacePopup = (props) => {
  return (
    <PopupWithForm title={props.title} name={props.name} isOpen={props.isOpen} onClose={props.onClose}>
      <label className="popup__form-field">
        <input name="name" type="text" id="name-place-input" className="popup__input popup__name-input-place"
          placeholder="Название" minLength="2" maxLength="30" required />
        <span className="popup__error name-place-input-error"></span>
      </label>
      <label className="popup__form-field">
        <input name="link" type="url" id="url-input-card" className="popup__input popup__link-input-place"
          placeholder="Ссылка на картинку" required />
        <span className="popup__error url-input-card-error"></span>
      </label>
    </PopupWithForm>
  )
}
export default AddPlacePopup;