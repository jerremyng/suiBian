import '../Styles/card.css';



function Card(props) {
    return (
      <div className="card">
        <div className="card__body">
          
          <h2 className="card__title">{props.title}</h2>
          <p className="card__description">{props.description}</p>
        </div>
        <button className="card__btn">View Recipe</button>
      </div>
    );
  }

export default Card;

//<img src={props.img} class="card__image" />