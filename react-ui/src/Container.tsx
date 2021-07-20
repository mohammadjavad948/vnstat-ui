import {useEffect} from "react";
import {getInterfaces} from "./api/vnstat";
import {useInterfaceStore} from "./store/interfaceStore";

export default function Container(){

    const {setInterfaces, setSelected, selected} = useInterfaceStore();

    async function init(){

        const interfaces = await getInterfaces();

        const inter = interfaces.split(' ').splice(0, 2);
        inter.splice(inter.length - 1, 1);

        setInterfaces(inter);
    }

    useEffect(() => {

    }, []);

    return (
        <div>

        </div>
    )
}
