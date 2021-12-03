import css from "./WaterTracker.module.css";
import Counter from "../Counter/Counter";
import NavBar from "../NavBar/NavBar";
import getCurrentDay from "../../../../helpers/getCurrentDay";
import UserService from "../../../../services/UserService";
import {useEffect, useState} from "react";
import ProgressBar from "../ProgressBar/ProgressBar";

// todo: User Settings page: add inputs

function WaterTracker() {
    const today = getCurrentDay();

    const updateWaterConsumption = (newCount, sign) => {
        UserService.updateConsumptionArr(newCount, sign);
        UserService.saveUserSettingsToLS();
    }

    const [count, setCount] = useState(0);

    const increaseCount = () => {
        const newCount = count + 200;
        setCount(newCount);
        updateWaterConsumption(newCount, '+');
    }

    const decreaseCount = () => {
        const newCount = count - 200;
        setCount(newCount);
        updateWaterConsumption(newCount, '-');
    }

    useEffect(() => {
        UserService.getUserObjFromLS().then((user) => {
            const today = getCurrentDay();
            const userConsumption = user.consumption;
            const todayObjIndex = userConsumption.findIndex((i) => i.date === today);

            if (userConsumption[todayObjIndex] === -1) {
                setCount(userConsumption[todayObjIndex].water = 0);
            } else {
                setCount(userConsumption[todayObjIndex].water);
            }
        }).catch((error) => {});
    }, []);

    return (
        <div className={`${css.waterTracker} container`}>
            <div className={css.content}>
                <h1>Water Tracker</h1>
                <div className="date">Today: {today}</div>
                <Counter
                    count={count}
                    increaseCount={increaseCount}
                    decreaseCount={decreaseCount}
                />
                <ProgressBar
                    count={count}
                />
            </div>
            <NavBar />
        </div>
    );
}

export default WaterTracker;
