import css from "./Counter.module.css";
import {useState} from "react";
import UserService from "../../../../services/UserService";
import getCurrentDay from "../../../../helpers/getCurrentDay";

function Counter () {
    const [count, setCount] = useState(0); // place into initial state a func not 0
    const increaseCount = () => {
        const currentDay = getCurrentDay();
        const newCount = count + 200;
        setCount(newCount);
        let dayConsumptionObj = UserService.saveLiquidConsumption(currentDay, newCount);
        UserService.updateConsumptionArr(dayConsumptionObj);
        UserService.saveUserSettingsToLS();
    }
    const decreaseCount = () => setCount(count - 200);

    const dailyWaterIntake = UserService.calcRequiredWaterQuantity();

    return (
        <div className={css.counterWrapper}>
            <h2>Type of drink: water</h2>

            <div className={css.counter}>
                <button
                    onClick={decreaseCount}
                    className={`${css.counterBtn} ${(count <= 0) ? css.disabled : ''}`}
                >&#9660;</button>

                <div className={css.countNum}>{count}</div>

                <button
                    onClick={increaseCount}
                    className={css.counterBtn}
                >&#9650;</button>
            </div>

            <div className={css.progressbar}>
                <span>Drank today: </span>
                <span>{count}</span>
                <span> ml </span>
                <span>{dailyWaterIntake} of water</span>
            </div>
        </div>
    );
}

export default Counter;
