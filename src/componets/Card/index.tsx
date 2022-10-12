import "./style.css";
import dotMenuIcon from "../../assets/icons/dotmenu-icon.png";
import Icon from "../Icon";
import starIcon from "../../assets/icons/star-icon.png";
import bagRedIcon from "../../assets/icons/bag-red-icon.png";

const Card = () => {
  return (
    <div className="Card">
      <div className="CardImage"></div>
      <div className="CardSection">
        <h1 className="CardTitle --bold">Cyberpunk 2077</h1>
        <Icon src={dotMenuIcon} />
      </div>
      <div className="CardSection">
        <span className="CardPriceText">Price</span>
        <span className="--bold">RS 199,99</span>
      </div>
      <div className="CardRating">
        <div className="--blur"></div>
        <div className="CardRatingIcon">
          <Icon src={starIcon} />
        </div>
        <span>8.7</span>
      </div>
      <div className="CardBagIcon">
        <Icon src={bagRedIcon} />
      </div>
    </div>
  );
};

export default Card;

/* Cart = Carrinho
Card = Cartão */
