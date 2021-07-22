import style from './sidebar.module.css';
import PrettyByte from 'pretty-bytes';
import {IconButton} from "@material-ui/core";
import DashboardIcon from '@material-ui/icons/Dashboard';
import FilterListIcon from '@material-ui/icons/FilterList';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import WifiIcon from '@material-ui/icons/Wifi';
import useFloat from "../../hooks/float";
import DataUsageSummeryFloat from "./DataUsageSummeryFloat";

export default function Sidebar(){

    const [summeryData, summeryClickHandle, summeryHideFn] = useFloat();

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
                <IconButton onClick={summeryClickHandle}>
                    <ImportExportIcon />
                </IconButton>
                <IconButton>
                    <WifiIcon />
                </IconButton>
            </div>
            <DataUsageSummeryFloat data={summeryData} hideFn={summeryHideFn} />
        </div>
    )
}
