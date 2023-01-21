import { api } from "../utils/Api";
import { useState, useEffect } from 'react';
import Card from "./Card";

const Main = (props) => {
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getUserData()
      .then(data => {
        setUserName(data.name)
        setUserDescription(data.about)
        setUserAvatar(data.avatar)
      })
    api.getInitialCards()
      .then(data => {
        setCards(data)
      })
  }, [setUserName, setUserDescription, setUserAvatar, setCards])

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__wrapper">
          <div className="profile__avatar" onClick={props.onEditAvatar}>
            <div style={{ backgroundImage: `url(${userAvatar})` }} alt="аватар." className="profile__avatar-img"
            />
          </div>
          <div className="profile__info">
            <div className="profile__paragraph-btn">
              <h1 className="profile__name" >{userName}</h1>
              <button type="button" aria-label="редактировать" className="profile__edit-button"
                onClick={props.onEditProfile}></button>
            </div>
            <p className="profile__job">{userDescription}</p>
          </div>
        </div>
        <button type="button" aria-label="добавить новую карточку" className="profile__add-button"
          onClick={props.onAddPlace}></button>
      </section>
      <section className="elements">
        <ul className="elements__card">
          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              onCardClick={props.onCardClick}
              onDeleteCard={props.onDeleteCard}
            />
          ))
          }
        </ul>
      </section>
    </main>
  )
}
export default Main;