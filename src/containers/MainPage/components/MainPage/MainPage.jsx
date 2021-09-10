import css from './MainPage.module.css';
import WaterCounter from '../WaterCounter/WaterCounter';
import NavBar from "../NavBar/NavBar";

// todo: date to helpers
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
