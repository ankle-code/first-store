import './style.css'
import Info from '../Info'
import Navigation from "../Navigation"

const Header = () => {
    return (
      <div className="Header">
        <Navigation />
        <Info />
      </div>)
}

export default Header