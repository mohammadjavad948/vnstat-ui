import style from './float.module.css';
import {useEffect, useState} from "react";
import useMeasure from "react-use-measure";

interface Props{
    left: number
    top: number
    side: 'right' | 'left' | 'top' | 'bottom'
    children: JSX.Element | string
}

export default function Float(props: Props){

    const [left, setLeft] = useState(0);
    const [top, setTop] = useState(0);

    const [ref, bounds] = useMeasure();

    useEffect(() => {

        const wh = window.innerHeight;
        const ww = window.innerWidth;

        if (props.side === 'right'){

            if (props.left + bounds.width > ww){
                setLeft(ww - props.left);
            } else {
                setLeft(props.left + 20)
            }

            if (props.top + bounds.height > wh){
                setTop(wh - props.top);
            } else {
                setTop(props.top)
            }

        }

    }, [bounds]);

    return (
        <div ref={ref} className={style.container} style={{top: top, left: left}}>
            {props.children}
        </div>
    )
}
