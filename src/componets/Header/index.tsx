import "./style.css";
import Info from "../Info";
import Navigation from "../Navigation";

const Header = () => {
  return (
    <div>
      <div className="Header">
        <Navigation />
        <Info />
      </div>
    </div>
  );
};

export default Header;
