import css from "./WaterTracker.module.css";
import Counter from "../Counter/Counter";
import NavBar from "../NavBar/NavBar";
import getCurrentDay from "../../../../helpers/getCurrentDay";
import UserService from "../../../../services/UserService";

// todo: check if count already exists in LS

function WaterTracker() {
    const today = getCurrentDay();
    const updateWaterConsumption = (newCount, sign) => {
        let dayConsumptionObj = UserService.saveLiquidConsumption(today, newCount);
        UserService.updateConsumptionArr(dayConsumptionObj, sign);
        UserService.saveUserSettingsToLS();
    }

    return (
        <div className={`${css.waterTracker} container`}>
            <div className={css.content}>
                <h1>Water Tracker</h1>
                <div className="date">Today: {today}</div>
                <Counter updateWaterConsumption={updateWaterConsumption} />
            </div>
            <NavBar />
        </div>
    );
}

export default WaterTracker;
