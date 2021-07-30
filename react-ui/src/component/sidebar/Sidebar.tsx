import style from './sidebar.module.css';
import {IconButton} from "@material-ui/core";
import DashboardIcon from '@material-ui/icons/Dashboard';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import WifiIcon from '@material-ui/icons/Wifi';
import useFloat from "../../hooks/float";
import DataUsageSummeryFloat from "./floats/DataUsageSummeryFloat";
import SelectInterfaceFloat from "./floats/SelectInterfaceFloat";

export default function Sidebar(){

    const [summeryData, summeryClickHandle, summeryHideFn] = useFloat();
    const [InterfaceData, InterfaceClickHandle, interfaceHideFn] = useFloat();

    return (
        <div className={style.sidebar}>
            <div className={style.items}>
                <IconButton>
                    <DashboardIcon />
                </IconButton>
            </div>
            <div className={style.items}>
                <IconButton onClick={summeryClickHandle}>
                    <ImportExportIcon />
                </IconButton>
                <IconButton onClick={InterfaceClickHandle}>
                    <WifiIcon />
                </IconButton>
                <DataUsageSummeryFloat data={summeryData} hideFn={summeryHideFn} />
                <SelectInterfaceFloat data={InterfaceData} hideFn={interfaceHideFn} />
            </div>
        </div>
    )
}
