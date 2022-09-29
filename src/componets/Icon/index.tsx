import './style.css'

type IconProps = {
    src: string
    width?: string
    height?: string
}

const Icon = (props: IconProps) => {
    const getIconSize = () => {
        if(props.width || props.height) {
            return {width: props.width, height: props.height}
        }
    }

    return <div style={{backgroundImage: `url(${props.src})`, ...getIconSize()}} className="Icon"></div>
}

export default Icon