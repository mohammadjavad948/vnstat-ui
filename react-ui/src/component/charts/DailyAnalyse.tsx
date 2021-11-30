import {Card, CardContent} from "@material-ui/core";
import {Bar} from "react-chartjs-2";

const options = {
    scales: {
        yAxes: [
            {
                ticks: {
                    beginAtZero: true,
                },
            },
        ],
        x: {
            stacked: true,
        },
        y: {
            stacked: true
        }
    },
}

export default function DailyAnalyse(props: {data: any}){

    return (
        <div className="col-lg-8 col-md-12 col-sm-12 mt-2">
            <Card>
                <CardContent>
                    <h3>Daily Usage Analyse (powered by rust)</h3>
                    <Bar data={data} options={options} />
                </CardContent>
            </Card>
        </div>
    )
}