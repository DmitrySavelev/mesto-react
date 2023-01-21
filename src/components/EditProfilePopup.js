import PopupWithForm from "./PopupWithForm";

const EditProfilePopup = (props) => {
  return (
    <PopupWithForm title={props.title} name={props.name} isOpen={props.isOpen} onClose={props.onClose}>
      <label className="popup__form-field">
        <input name="inputName" type="text" id="name-input" className="popup__input popup__input_name"
          placeholder="Ваше имя" minLength="2" maxLength="40" required />
        <span className="popup__error name-input-error"></span>
      </label>
      <label className="popup__form-field">
        <input name="inputJob" type="text" id="job-input" className="popup__input popup__input_job"
          placeholder="Ваша специализация" minLength="2" maxLength="200" required />
        <span className="popup__error job-input-error"></span>
      </label>
    </PopupWithForm>
  )
}
export default EditProfilePopup;