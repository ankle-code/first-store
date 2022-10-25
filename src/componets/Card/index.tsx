import "./style.css";
import dotMenuIcon from "../../assets/icons/dotmenu-icon.png";
import Icon from "../Icon";
import starIcon from "../../assets/icons/star-icon.png";
import bagRedIcon from "../../assets/icons/bag-red-icon.png";

type CardProps = {
  id: number;
  name: string;
  price: number;
  rating: number;
  image: string;
  cart: boolean | undefined;
};

const Card = (props: CardProps) => {
  const navigateTo = () => {
    console.log(props.id);
    window.location.href = `http://localhost:3000/product/${props.id}`;
  };

  const renderStoreCard = (
    <div className="Card" onClick={navigateTo}>
      <div
        className="CardImage"
        style={{ backgroundImage: `url(${props.image})` }}
      ></div>
      <div className="CardSection">
        <h1 className="CardTitle --bold">{props.name}</h1>
        <Icon src={dotMenuIcon} />
      </div>
      <div className="CardSection">
        <span className="CardPriceText">Price</span>
        <span className="--bold">RS {props.price.toFixed(2)}</span>
      </div>
      <div className="CardRating">
        <div className="--blur"></div>
        <div className="CardRatingIcon">
          <Icon src={starIcon} />
        </div>
        <span>{props.rating}</span>
      </div>
      <div className="CardBagIcon">
        <Icon src={bagRedIcon} />
      </div>
    </div>
  );

  const renderCartCard = (
    <div className="Card --backgroundRed">
      <div
        className="CardImage"
        style={{ backgroundImage: `url(${props.image})` }}
      ></div>
      <div className="CardSection --white">
        <h1 className="CardTitle --bold">{props.name}</h1>
        <Icon src={dotMenuIcon} />
      </div>
      <div className="CardSection">
        <span className="CardPriceText --white">Price</span>
        <span className="--bold">RS {props.price.toFixed(2)}</span>
      </div>
      <div className="CardBagIcon">
        <Icon src={bagRedIcon} />
      </div>
    </div>
  );

  const handleRenderCard = () => {
    if (props.cart) {
      return renderCartCard;
    }

    return renderStoreCard;
  };

  return handleRenderCard();
};

export default Card;
