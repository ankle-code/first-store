import "./style.css";
import dotMenuIcon from "../../assets/icons/dotmenu-icon.png";
import Icon from "../Icon";
import starIcon from "../../assets/icons/star-icon.png";
import bagRedIcon from "../../assets/icons/bag-red-icon.png";
import checkIcon from "../../assets/icons/check-icon.png";
import trashIcon from "../../assets/icons/trash-icon.png";
import plusIcon from "../../assets/icons/plus-icon.png";
import lessIcon from "../../assets/icons/less-icon.png";
import dotMenuBlackIcon from "../../assets/icons/dotmenu-black-icon.png";

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
        <Icon src={dotMenuBlackIcon} />
      </div>
      <div className="CardSection">
        <span className="CardPriceText --white">Price</span>
        <span className="--bold">RS {props.price.toFixed(2)}</span>
      </div>
      <div className="CardBagIcon">
        <Icon src={checkIcon} />
      </div>
      <div>
        <label>Quantidade:</label>
        <div className="CardInputAmount">
          <div className="CardInputAmountIcon">
            <Icon src={plusIcon} />
          </div>
          <input value="1" />
          <div className="CardInputAmountIcon">
            <Icon src={lessIcon} />
          </div>
        </div>
        <div className="CardInputDeleteIcon">
          <Icon src={trashIcon} />
        </div>
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
