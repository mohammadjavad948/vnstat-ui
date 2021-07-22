import style from './float.module.css';
import {useEffect, useRef, useState} from "react";
import useMeasure from "react-use-measure";
import mergeRefs from "react-merge-refs";

interface Props{
    left: number
    top: number
    side: 'right' | 'left' | 'top' | 'bottom'
    children: JSX.Element | string
    hideFn: () => void
}

export default function Float(props: Props){

    const [left, setLeft] = useState(0);
    const [top, setTop] = useState(0);

    const [ref, bounds] = useMeasure();

    const node = useRef() as any;

    const handleClick = (e: any) => {
        // @ts-ignore
        if (node.current.contains(e.target)) {
            // inside click
            return;
        }

        // outside click
        props.hideFn();
    };

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

    useEffect(() => {
        // add when mounted
        document.addEventListener("mousedown", handleClick);
        // return function to be called when unmounted
        return () => {
            document.removeEventListener("mousedown", handleClick);
        };
    }, [])

    return (
        <div
            ref={mergeRefs([ref, node])}
            className={style.container}
            style={{
                top: top,
                left: left,
                opacity: (top === 0 && left === 0) ? 0 : 1
            }}
        >
            {props.children}
        </div>
    )
}
