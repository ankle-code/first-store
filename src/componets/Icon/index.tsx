type IconProps = {
    src: string
}

const Icon = (props: IconProps) => {
    return <img src={props.src} />
}

export default Icon