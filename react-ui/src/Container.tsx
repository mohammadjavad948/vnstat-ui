import {useEffect} from "react";
import {getData, getInterfaces} from "./api/vnstat";
import {useInterfaceStore} from "./store/interfaceStore";

export default function Container(){

    const {setInterfaces, setSelected, selected} = useInterfaceStore();

    async function init(){

        const interfaces = await getInterfaces();

        const inter = interfaces.split(' ');

        inter.splice(0, 2);
        inter.splice(inter.length - 1, 1);

        setInterfaces(inter);

        console.log(inter);

        console.log(await getData(['-i', 'wlp2s0']))
        if (!inter.includes(selected)){
            setSelected(inter[0]);
        }

    }

    useEffect(() => {
        init();
    }, []);

    return (
        <div>

        </div>
    )
}
