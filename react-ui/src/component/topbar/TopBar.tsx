import style from './topbar.module.css';
import CloseIcon from '@material-ui/icons/Close';
import Crop169Icon from '@material-ui/icons/Crop169';
import MinimizeIcon from '@material-ui/icons/Minimize';

export default function TopBar(){

    return (
        <div className={style.container}>
            <div>

            </div>
            <div className={style.icons}>
                <div>
                    <MinimizeIcon />
                </div>
                <div>
                    <Crop169Icon />
                </div>
                <div>
                    <CloseIcon />
                </div>
            </div>
        </div>
    )
}
