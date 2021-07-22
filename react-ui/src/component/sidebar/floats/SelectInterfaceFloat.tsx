import style from './select.module.css';
import Float from "../../float/Float";
import {useInterfaceStore} from "../../../store/interfaceStore";
import {FormControlLabel, Radio, RadioGroup} from "@material-ui/core";


interface SelectI{
    data: any
    hideFn: any
}

export default function SelectInterfaceFloat(props: SelectI){

    const {selected, interfaces, setSelected} = useInterfaceStore();

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

                        <RadioGroup name="interface" value={selected}>
                            {
                                interfaces.map((data, index) => {
                                    return <FormControlLabel value={data} control={<Radio />} label={data} key={index} />
                                })
                            }
                        </RadioGroup>
                    </Float>
                )
            }
        </div>
    )
}
