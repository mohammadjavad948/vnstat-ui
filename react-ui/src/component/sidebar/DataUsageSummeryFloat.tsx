import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Float from "../float/Float";

interface DataUsageI{
    data: any
    hideFn: any
}

export default function DataUsageSummeryFloat(props: DataUsageI){

    return (
        <div>
            {props.data.show && (
                <Float
                    top={props.data.y}
                    left={props.data.x}
                    side={'right'}
                    hideFn={props.hideFn}
                >
                    <div>
                        <ExpandMoreIcon />
                        1.5GB
                    </div>
                </Float>
            )}
        </div>
    )
}
