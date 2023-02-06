import { useRef, useState } from "react";
import PopupWithForm from "./PopupWithForm";

const EditAvatarPopup = (props) => {
  const avatarRef = useRef();
  // const [avatar, setAvatar] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar({
      // avatar: avatar,
      avatar: avatarRef.current.value,
    });
  }

  return (
    <PopupWithForm
      title={props.title}
      name={props.name}
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <label className="popup__form-field">
        <input
          ref={avatarRef}
          // onChange={(e) => setAvatar(e.target.value)}
          name="link"
          type="url"
          id="url-input-avatar"
          className="popup__input popup__link-input-avatar"
          placeholder="Ссылка на новую аватарку"
          required
        />
        <span className="popup__error url-input-avatar-error"></span>
      </label>
    </PopupWithForm>
  );
};
export default EditAvatarPopup;
