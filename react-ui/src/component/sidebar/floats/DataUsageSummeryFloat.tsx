import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import Float from "../../float/Float";
import style from './sum.module.css';

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
                    <div className={style.title}>
                        Today
                    </div>
                    <div className={`${style.data} ${style.green}`}>
                        <ExpandMoreIcon />
                        1.5GB
                    </div>
                    <div className={`${style.data} ${style.red}`}>
                        <ExpandLessIcon />
                        1.5GB
                    </div>

                    <div className={style.title} style={{marginTop: '10px'}}>
                        This Month
                    </div>
                    <div className={`${style.data} ${style.green}`}>
                        <ExpandMoreIcon />
                        1.5GB
                    </div>
                    <div className={`${style.data} ${style.red}`}>
                        <ExpandLessIcon />
                        1.5GB
                    </div>
                </Float>
            )}
        </div>
    )
}
