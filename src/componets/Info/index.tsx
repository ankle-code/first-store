import './style.css'
import Border from "../Border"
import Icon from '../Icon'
import BagIcon from '../../assets/icons/bag-icon.png'
import BellIcon from '../../assets/icons/bell-icon.png'

const Info = () => {
    return (
      <div className='Info'>
        <Border>
          <Icon src={BagIcon} />
        </Border>
        <Border>
          <Icon src={BellIcon} />
        </Border>
      </div>
    )
}

export default Info