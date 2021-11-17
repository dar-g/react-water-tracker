import css from "./WaterTracker.module.css";
import Counter from "../Counter/Counter";
import NavBar from "../NavBar/NavBar";
import getCurrentDay from "../../../../helpers/getCurrentDay";
import UserService from "../../../../services/UserService";

// todo: put here decrease, increase functions and count state
// todo: add progress bar
// todo: User Settings page: add inputs
// todo: User Statistics charts
function WaterTracker() {
    const today = getCurrentDay();

    const updateWaterConsumption = (newCount, sign) => {
        UserService.updateConsumptionArr(newCount, sign);
        UserService.saveUserSettingsToLS();
    }

    return (
        <div className={`${css.waterTracker} container`}>
            <div className={css.content}>
                <h1>Water Tracker</h1>
                <div className="date">Today: {today}</div>
                <Counter
                    updateWaterConsumption={updateWaterConsumption}
                />
            </div>
            <NavBar />
        </div>
    );
}

export default WaterTracker;
