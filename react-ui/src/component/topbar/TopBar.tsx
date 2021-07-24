import style from './topbar.module.css';
import CloseIcon from '@material-ui/icons/Close';
import CropDinIcon from '@material-ui/icons/CropDin';
import MinimizeIcon from '@material-ui/icons/Minimize';

export default function TopBar(){

    function close(){
        window.api?.send('close');
    }

    function minimize(){
        window.api?.send('minimize');
    }

    function toggleMax(){
        window.api.send('un-maximize');
    }

    return (
        <div className={style.container}>
            <div>

            </div>
            <div className={style.icons}>
                <div className={style.ic} onClick={minimize}>
                    <MinimizeIcon className={style.icon} />
                </div>
                <div className={style.ic} onClick={toggleMax}>
                    <CropDinIcon className={style.icon} />
                </div>
                <div className={style.ic} onClick={close}>
                    <CloseIcon className={style.icon} />
                </div>
            </div>
        </div>
    )
}
