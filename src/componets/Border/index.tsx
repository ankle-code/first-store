import { ReactElement } from 'react';
import './style.css'

type BorderProps = { children: ReactElement; }

const Border = (props: BorderProps) => {
    return <div className="Border">{props.children}</div>
}

export default Border