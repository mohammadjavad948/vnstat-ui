import style from './panel.module.css';
import DailyUsageChart from "./component/charts/DailyUsageChart";
import MonthUploadVsDownloadChart from "./component/charts/MonthUploadVsDownloadChart";
import ThisYearChart from "./component/charts/ThisYearChart";

export default function Panel(){

    return (
        <div className={style.container}>
            <div className="container">
                <div className="row">
                    <DailyUsageChart />
                    <MonthUploadVsDownloadChart />
                    <ThisYearChart />
                </div>
            </div>
        </div>
    )
}
