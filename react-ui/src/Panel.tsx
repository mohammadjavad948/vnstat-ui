import style from './panel.module.css';
import DailyUsageChart from "./component/charts/DailyUsageChart";

export default function Panel(){

    return (
        <div className={style.container}>
            <DailyUsageChart />
        </div>
    )
}
