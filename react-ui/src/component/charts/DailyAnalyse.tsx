import {Card, CardContent} from "@material-ui/core";
import {Bar} from "react-chartjs-2";

const options = {
    scales: {
        yAxes: [
            {
                stacked: true,
                ticks: {
                    beginAtZero: true,
                },
            },
        ],
    },
}

export default function DailyAnalyse(props: {data: any}){

    return (
        <div className="col-lg-8 col-md-12 col-sm-12 mt-2">
            <Card>
                <CardContent>
                    <h3>Daily Usage Analyse (powered by rust)</h3>
                    <Bar
                        data={{
                            labels: [1, 2, 3, 4, 5, 6, 7],
                            datasets: [
                                {
                                    label: 'Min',
                                    data: props.data.min,
                                    backgroundColor: 'rgb(0,255,115)',
                                },
                                {
                                    label: 'Avg',
                                    data: props.data.avg,
                                    backgroundColor: 'rgb(0,155,255)',
                                },
                                {
                                    label: 'Max',
                                    data: props.data.max,
                                    backgroundColor: 'rgb(76,0,255)',
                                },
                            ],
                        }}
                        options={options}
                    />
                </CardContent>
            </Card>
        </div>
    )
}