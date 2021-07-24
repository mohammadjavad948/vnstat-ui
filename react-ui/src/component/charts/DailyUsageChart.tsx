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
    const [sum, setSum] = useState(0);

    const {data: rawData} = useDataStore();

    useEffect(() => {
        const days = rawData.interfaces[0].traffic?.day;

        const last7: DayTraffic[] = days.slice(Math.max(days.length - 7, 1));

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
                    backgroundColor: 'rgb(0,155,255)',
                },
            ],
        })

        let s = 0;

        last7.forEach((el) => {
            s+= el.tx + el.rx;
        });

        setSum(s)

    }, [rawData])

    return (
        <div className="col-lg-8 col-md-12 col-sm-12">
            <Card>
                <CardContent>
                    <h3>This Week {PrettyByte(sum)}</h3>
                    <Bar data={data} options={options} />
                </CardContent>
            </Card>
        </div>
    )
}
