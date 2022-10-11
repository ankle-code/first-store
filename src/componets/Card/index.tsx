import "./style.css";
import dotMenuIcon from "../../assets/icons/dotmenu-icon.png";
import Icon from "../Icon";

const Card = () => {
  return (
    <div className="Card">
      <div className="CardImage"></div>
      <div className="CardAbout">
        <h1 className="CardTitle">Cyberpunk 2077</h1>
        <Icon src={dotMenuIcon} />
      </div>
      <div className="CardPrice">
        <span className="CardPriceText">Price</span>
        <span className="CardPriceNumber">RS 199,99</span>
      </div>
    </div>
  );
};

export default Card;
