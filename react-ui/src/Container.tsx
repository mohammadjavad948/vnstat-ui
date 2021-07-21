import {useEffect} from "react";
import {getData, getInterfaces} from "./api/vnstat";
import {useInterfaceStore} from "./store/interfaceStore";
import Sidebar from "./component/sidebar/Sidebar";
import {useDataStore} from "./store/dataStore";

export default function Container(){

    const {setInterfaces, setSelected, selected} = useInterfaceStore();
    const {setData} = useDataStore();

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

        setData(data);
    }

    useEffect(() => {
        init();
    }, []);

    return (
        <div>
            <Sidebar />
        </div>
    )
}
