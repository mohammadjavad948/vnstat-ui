import style from './sidebar.module.css';
import PrettyByte from 'pretty-bytes';
import {useDataStore} from "../../store/dataStore";

export default function Sidebar(){

    const {data} = useDataStore();

    return (
        <div className={style.sidebar}>
            <div className={style.items}>

            </div>
            <div className={style.items}>

            </div>
        </div>
    )
}
