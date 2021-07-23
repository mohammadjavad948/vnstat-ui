import {Card, CardContent} from "@material-ui/core";
import {Bar} from "react-chartjs-2";
import {useEffect, useState} from "react";
import {useDataStore} from "../../store/dataStore";
import PrettyByte from "pretty-bytes";
import {DayTraffic} from "../../type/response";

const options = {
    scales: {
        yAxes: [
            {
                ticks: {
                    beginAtZero: true,
                },
            },
        ],
    },
}

export default function DailyUsageChart(){

    const [data, setData] = useState({});

    const {data: rawData} = useDataStore();

    useEffect(() => {
        const days = rawData.interfaces[0].traffic?.day;

        const last7 = days.slice(Math.max(days.length - 7, 1));

        setData({
            labels: last7.map((el: DayTraffic) => {
                return PrettyByte(el.rx + el.tx);
            }),
            datasets: [
                {
                    label: 'Usage (download + upload)',
                    data: last7.map((el: DayTraffic) => {
                        return el.rx + el.tx;
                    }),
                    backgroundColor: 'rgba(54, 162, 235, 1)',
                },
            ],
        })

    }, [rawData])

    return (
        <div className="col-6">
            <Card>
                <CardContent>
                    <Bar data={data} options={options} />
                </CardContent>
            </Card>
        </div>
    )
}
