import {useEffect, useState} from "react";
import {getData, getInterfaces} from "./api/vnstat";
import {useInterfaceStore} from "./store/interfaceStore";
import Sidebar from "./component/sidebar/Sidebar";
import {useDataStore} from "./store/dataStore";
import style from './container.module.css';
import Panel from "./Panel";

export default function Container(){

    const {setInterfaces, setSelected, selected} = useInterfaceStore();
    const {setData} = useDataStore();

    const [daysData, setDaysData] = useState({min: [], max: [], avg: []});

    const [updateInterval, setUpdateInterval] = useState(null) as any;

    async function init(){

        const interfaces = await getInterfaces();

        const inter = interfaces.split(' ');

        inter.splice(0, 2);
        inter.splice(inter.length - 1, 1);

        setInterfaces(inter);

        if (!inter.includes(selected)){
            setSelected(inter[0]);
        }

        const data = await getData(['-i', selected]);

        const all = await import('rust-processor');

        const res = all.days_chart(
            JSON.stringify(
                await getData(['-d', '--limit', '0', '-i', selected])
            )
        )

        setDaysData(JSON.parse(res));

        console.log(JSON.parse(res))

        setData(data);
    }

    useEffect(() => {
        init();

        const interval = setInterval(() => {

            console.log('updating');

            init();

        }, 5 * 60 * 1000)

        setUpdateInterval(interval);

        return () => {
            clearInterval(updateInterval);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selected]);

    return (
        <div className={style.container}>
            <Sidebar />
            <Panel />
        </div>
    )
}
