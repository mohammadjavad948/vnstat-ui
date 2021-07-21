import style from './sidebar.module.css';
import PrettyByte from 'pretty-bytes';
import {useDataStore} from "../../store/dataStore";
import {IconButton} from "@material-ui/core";
import DashboardIcon from '@material-ui/icons/Dashboard';
import FilterListIcon from '@material-ui/icons/FilterList';
import {useInterfaceStore} from "../../store/interfaceStore";
import ImportExportIcon from '@material-ui/icons/ImportExport';
import WifiIcon from '@material-ui/icons/Wifi';

export default function Sidebar(){

    const {data} = useDataStore();
    const {selected} = useInterfaceStore();

    return (
        <div className={style.sidebar}>
            <div className={style.items}>
                <IconButton>
                    <DashboardIcon />
                </IconButton>
                <IconButton>
                    <FilterListIcon />
                </IconButton>
            </div>
            <div className={style.items}>
                <IconButton>
                    <ImportExportIcon />
                </IconButton>
                <IconButton>
                    <WifiIcon />
                </IconButton>
            </div>
        </div>
    )
}
