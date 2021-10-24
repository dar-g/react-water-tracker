import css from "./WaterTracker.module.css";
import Counter from "../Counter/Counter";
import NavBar from "../NavBar/NavBar";
import getCurrentDay from "../../../../helpers/getCurrentDay";

// todo: check if count already exists in LS

function WaterTracker() {

    return (
        <div className={`${css.waterTracker} container`}>
            <div className={css.content}>
                <h1>Water Tracker</h1>
                <div className="date">Today: {getCurrentDay()}</div>
                <Counter />
            </div>
            <NavBar />
        </div>
    );
}

export default WaterTracker;