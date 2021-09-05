import css from '../../styles/MainPage.module.css';
import WaterCounter from './components/WaterCounter';
import NavBar from "./components/NavBar";

// todo: add a date
// todo: add a required number for water consumption [weight*0.033]

function MainPage() {
    const day = new Date();
    const dayWithoutTime = day.getFullYear() + '/' + (day.getMonth()+1) + '/' + day.getDate();

    return (
        <div className={`${css.mainPage} container`}>
            <h1>Main page</h1>

            <div className="date">Today: {dayWithoutTime}</div>

            <WaterCounter />

            <NavBar />
        </div>
    );
}

export default MainPage;
