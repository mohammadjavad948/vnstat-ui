import style from './topbar.module.css';
import CloseIcon from '@material-ui/icons/Close';
import CropDinIcon from '@material-ui/icons/CropDin';
import MinimizeIcon from '@material-ui/icons/Minimize';

export default function TopBar(){

    return (
        <div className={style.container}>
            <div>

            </div>
            <div className={style.icons}>
                <div className={style.ic}>
                    <MinimizeIcon />
                </div>
                <div className={style.ic}>
                    <CropDinIcon />
                </div>
                <div className={style.ic}>
                    <CloseIcon />
                </div>
            </div>
        </div>
    )
}
