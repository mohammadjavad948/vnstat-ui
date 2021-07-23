import style from './panel.module.css';
import DailyUsageChart from "./component/charts/DailyUsageChart";

export default function Panel(){

    return (
        <div className={style.container}>
            <div className="container">
                <div className="row">
                    <DailyUsageChart />
                </div>
            </div>
        </div>
    )
}
