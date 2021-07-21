import style from './sidebar.module.css';
import PrettyByte from 'pretty-bytes';
import {useDataStore} from "../../store/dataStore";

export default function Sidebar(){

    const {data} = useDataStore();

    return (
        <div className={style.sidebar}>
            <div>
                {PrettyByte(data?.interfaces[0]?.traffic?.total?.rx || 0)}
            </div>
        </div>
    )
}
