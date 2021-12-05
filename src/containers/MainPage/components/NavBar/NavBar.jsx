import css from "../WaterTracker/WaterTracker.module.css";
import {Link} from "react-router-dom";
import stat from "./icons/stat.svg";
import water from "./icons/water.svg";
import settings from "./icons/settings.svg";

// todo: add active/inactive Menu button

function NavBar () {
    return (
        <nav className={css.bottomMenu}>
            <Link to="/main/statistics" className={css.menuBtn}>
                <img src={stat} alt="Statistics" className={css.menuBtnImg} />
            </Link>
            <Link to="/main/tracker" className={css.menuBtn}>
                <img src={water} alt="Water" className={css.menuBtnImg} />
            </Link>
            <Link to="/main/settings" className={css.menuBtn}>
                <img src={settings} alt="Settings" className={css.menuBtnImg} />
            </Link>
        </nav>
    );
}

export default NavBar;
