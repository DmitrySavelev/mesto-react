import '../index.css';

function Card({ card, onCardClick, onDeleteCard }) {

  function handleCardClick() {
    onCardClick(card);
  }

  return (
    <div className="App">
      <li className="elements__list">
        <div className="elements__wrapper">
          <div className="elements__image" style={{ backgroundImage: `url(${card.link})` }}
            onClick={handleCardClick} />
          <button type="button" onClick={onDeleteCard} aria-label="удалить карточку" className="elements__delete"></button>
        </div>
        <div className="elements__text-content">
          <h2 className="elements__title">{card.name}</h2>
          <div className="elements__like_wrapper">
            <button type="button" aria-label="поставить лайк" className="elements__like"></button>
            <span className="elements__like_count">{card.likes.length}</span>
          </div>
        </div>
      </li>
    </div>
  );
}

export default Card;