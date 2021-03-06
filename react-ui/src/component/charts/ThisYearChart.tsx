import {Card, CardContent} from "@material-ui/core";
import {useEffect, useState} from "react";
import {useDataStore} from "../../store/dataStore";
import {Doughnut} from "react-chartjs-2";
import PrettyByte from "pretty-bytes";

export default function ThisYearChart(){

    const [data, setData] = useState({});
    const [sum, setSum] = useState(0);

    const {data: rawData} = useDataStore();

    useEffect(() => {
        const month = rawData.interfaces[0].traffic.month;

        const month12 = month.slice(Math.max(month.length - 12, 0));

        setData({
            labels: month12.map((data) => {

                const sum = data.rx + data.tx;

                return `${PrettyByte(sum || 0)} ${data.date.year}-${data.date.month}`
            }),
            datasets: [
                {
                    data: month12.map((data) => {
                        return data.rx + data.tx;
                    }),
                    backgroundColor: month12.map(() => {
                        return getRandomColor();
                    }),
                },
            ],
        });

        let s = 0;

        month12.forEach((el) => {
            s += el.rx + el.tx;
        });

        setSum(s);

    }, [rawData]);

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    return (
        <div className="col-lg-4 col-md-6 col-sm-12 mt-2">
            <Card>
                <CardContent>
                    <h3>This Year {PrettyByte(sum)}</h3>
                    <Doughnut data={data} />
                </CardContent>
            </Card>
        </div>
    )
}
