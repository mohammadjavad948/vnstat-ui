import style from './select.module.css';
import Float from "../../float/Float";


interface SelectI{
    data: any
    hideFn: any
}

export default function SelectInterfaceFloat(props: SelectI){

    return (
        <div>
            {
                props.data.show && (
                    <Float
                        top={props.data.y}
                        left={props.data.x}
                        side={'right'}
                        hideFn={props.hideFn}
                    >
                        <div className={style.title}>
                            Select Interface
                        </div>
                    </Float>
                )
            }
        </div>
    )
}
