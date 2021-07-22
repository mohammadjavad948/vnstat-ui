import {useState} from "react";


/*
 * function to handle float.
 * return [showState, click, hideFn]
 */
export default function useFloat(): [{x: number, y: number, show: boolean}, (event: any) => void, () => void]{
    const [float, setCM] = useState({x: 0, y: 0, show: false});

    function hide(){
        setCM({x: 0, y: 0, show: false})
    }

    function click(event: any){
        event.preventDefault();

        setCM({
            x: event.pageX,
            y: event.pageY,
            show: true
        })
    }

    return [float, click, hide]
}
