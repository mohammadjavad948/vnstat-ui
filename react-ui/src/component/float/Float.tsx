import style from './float.module.css';

interface Props{
    left: number
    top: number
    side: 'right' | 'left' | 'top' | 'bottom'
    children: JSX.Element | string
}

export default function Float(props: Props){

    return (
        <div className={style.container}>
            {props.children}
        </div>
    )
}
