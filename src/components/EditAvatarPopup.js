import PopupWithForm from "./PopupWithForm";

const EditAvatarPopup = (props) => {
  return (
    <PopupWithForm title={props.title} name={props.name} isOpen={props.isOpen} onClose={props.onClose}>
      <form name="popupForm" className="popup__form popup__form_avatar" noValidate>
        <label className="popup__form-field">
          <input name="link" type="url" id="url-input-avatar" className="popup__input popup__link-input-avatar"
            placeholder="Ссылка на новую аватарку" required />
          <span className="popup__error url-input-avatar-error"></span>
        </label>
      </form>
    </PopupWithForm>
  )
}
export default EditAvatarPopup;