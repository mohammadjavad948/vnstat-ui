import style from './panel.module.css';
import DailyUsageChart from "./component/charts/DailyUsageChart";
import MonthUploadVsDownloadChart from "./component/charts/MonthUploadVsDownloadChart";

export default function Panel(){

    return (
        <div className={style.container}>
            <div className="container">
                <div className="row">
                    <DailyUsageChart />
                    <MonthUploadVsDownloadChart />
                </div>
            </div>
        </div>
    )
}
