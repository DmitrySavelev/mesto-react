const ImagePopup = ({ card, onClose }) => {
  return (
    <section className={`popup popup_zoom ${card === undefined || card === null ? ' ' : 'popup_opened'}`}>
      <figure className="popup__figure">
        <button type="button" aria-label="закрыть изображение"
          className="popup__button-close popup__button-close_image" onClick={onClose}></button>
        <img alt={card === undefined || card === null ? ' ' : card.name} className="popup__image"
          src={card === undefined || card === null ? ' ' : card.link} />
        <figcaption className="popup__caption">
          {card === undefined || card === null ? ' ' : card.name}
        </figcaption>
      </figure>
    </section>
  )
}
export default ImagePopup;