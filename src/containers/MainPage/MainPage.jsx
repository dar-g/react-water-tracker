import {Link} from 'react-router-dom';
import css from '../../styles/MainPage.module.css';
import stat from '../../media/icons/stat.svg';
import water from '../../media/icons/water.svg';
import settings from '../../media/icons/settings.svg';
import logout from '../../media/icons/logout.svg';
import WaterCounter from './components/WaterCounter';

// todo: main page components
// todo: add active/inactive Menu button
// todo: add date
function MainPage() {
    function clearLS() {
        localStorage.clear();
    }

    return (
        <div className={`${css.mainPage} container`}>
            <h1>Main page</h1>

            <div className="date">Today:</div>

            <WaterCounter />

            <nav className={css.bottomMenu}>
                <Link to="/user-statistics" className={css.menuBtn}>
                    <img src={stat} alt="Statistics" className={css.menuBtnImg} />
                </Link>
                <Link to="/main" className={css.menuBtn}>
                    <img src={water} alt="Water" className={css.menuBtnImg} />
                </Link>
                <Link to="/user-settings" className={css.menuBtn}>
                    <img src={settings} alt="Settings" className={css.menuBtnImg} />
                </Link>
                <button onClick={clearLS} className={css.menuBtn}>
                    <img src={logout} alt="Logout" className={css.menuBtnImg} />
                </button>
            </nav>
        </div>
    );
}

export default MainPage;
