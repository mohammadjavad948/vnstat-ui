import style from './panel.module.css';
import DailyUsageChart from "./component/charts/DailyUsageChart";
import MonthUploadVsDownloadChart from "./component/charts/MonthUploadVsDownloadChart";
import ThisYearChart from "./component/charts/ThisYearChart";
import DailyAnalyse from "./component/charts/DailyAnalyse";

export default function Panel(props: {data: any}){

    return (
        <div className={style.container}>
            <div className="container">
                <div className="row">
                    <DailyUsageChart />
                    <MonthUploadVsDownloadChart />
                    <ThisYearChart />
                    <DailyAnalyse data={props.data} />
                </div>
            </div>
        </div>
    )
}
