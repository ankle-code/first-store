import './style.css'
import Border from "../Border"
import Icon from '../Icon'
import BagIcon from '../../assets/icons/bag-icon.png'
import BellIcon from '../../assets/icons/bell-icon.png'
import DollarIcon from '../../assets/icons/dollar-icon.png'
import Avatar from '../Avatar'
import AvatarImage from '../../assets/images/avatar.jpg'

const Info = () => {
    return (
      <div className='Info'>
        <Border>
          <Icon src={BagIcon} />
        </Border>
        <Border>
          <Icon src={BellIcon} />
        </Border>
        <Border>
          <div className='Info__money'>
            <Icon src={DollarIcon} width="16px" height='16px'/>
            <span>1500,00</span>
          </div>
        </Border>
        <Avatar src={AvatarImage} />
      </div>
    )
}

export default Info