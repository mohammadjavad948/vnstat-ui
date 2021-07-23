import {Card, CardContent} from "@material-ui/core";
import {useEffect, useState} from "react";
import {useDataStore} from "../../store/dataStore";

export default function MonthUploadVsDownloadChart(){

    const [data, setData] = useState({});

    const {data: rawData} = useDataStore();

    useEffect(() => {
        const lastMonth = rawData.interfaces[0].traffic.month[rawData.interfaces[0].traffic.month.length - 1];

        setData({
            labels: ['Download', 'Upload'],
            datasets: [
                {
                    label: 'Download',
                    data: 5,
                },
                {
                    label: 'Upload',
                    data: 20,
                },
            ],
        });
    }, [rawData]);

    return (
        <div className="col-lg-6 col-md-12 col-sm-12">
            <Card>
                <CardContent>
                </CardContent>
            </Card>
        </div>
    )
}
