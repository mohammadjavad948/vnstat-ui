import {Card, CardContent} from "@material-ui/core";
import {useEffect, useState} from "react";
import {useDataStore} from "../../store/dataStore";
import {Doughnut} from "react-chartjs-2";
import PrettyByte from "pretty-bytes";

export default function MonthUploadVsDownloadChart(){

    const [data, setData] = useState({});

    const {data: rawData} = useDataStore();

    useEffect(() => {
        const lastMonth = rawData.interfaces[0].traffic.month[rawData.interfaces[0].traffic.month.length - 1];

        setData({
            labels: [`${PrettyByte(lastMonth?.rx || 0)} Download`, `${PrettyByte(lastMonth?.tx || 0)} Upload`],
            datasets: [
                {
                    data: [lastMonth?.rx || 0, lastMonth?.tx || 0],
                    backgroundColor: [
                        'rgb(51,248,0)',
                        'rgb(255,0,0)',
                    ],
                },
            ],
        });
    }, [rawData]);

    return (
        <div className="col-lg-4 col-md-12 col-sm-12">
            <Card>
                <CardContent>
                    <h3>This Month</h3>
                    <Doughnut data={data} />
                </CardContent>
            </Card>
        </div>
    )
}
