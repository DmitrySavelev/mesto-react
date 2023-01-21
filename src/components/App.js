import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import { useState } from 'react';
import EditAvatarPopup from './EditAvatarPopup';
import EditProfilePopup from './EditProfilePopup';
import AddPlacePopup from './AddPlacePopup';
import PopupWithForm from './PopupWithForm';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isDeleteCardPopupOpen, setIsDeleteCardPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function handleDeleteCardClick() {
    setIsDeleteCardPopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsDeleteCardPopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <div className="App" >
      <div className="page">
        <Header />
        <Main onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onDeleteCard={handleDeleteCardClick}
          onCardClick={handleCardClick}
        />
        <Footer />
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        <EditAvatarPopup title='Обновить аватар' name='avatar' isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups} />
        <EditProfilePopup title='Редактировать профиль' name='edit' isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups} />
        <AddPlacePopup title='Новое место' name='card' isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups} />
        <PopupWithForm title='Вы уверены?' name='delete' buttonName='Да' isOpen={isDeleteCardPopupOpen}
          onClose={closeAllPopups} />
      </div>
    </div>
  );
}

export default App;