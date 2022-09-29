import './style.css'

type AvatarProps = {
  src: string
}

const Avatar = (props: AvatarProps) => {
    return (
      <div className='Avatar__border'>
        <div className='Avatar' style={{backgroundImage: `url(${props.src})`}}></div>
      </div>
    )
}

export default Avatar