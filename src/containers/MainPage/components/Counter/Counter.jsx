import css from "./Counter.module.css";
import {useEffect, useState} from "react";
import UserService from "../../../../services/UserService";
import getCurrentDay from "../../../../helpers/getCurrentDay";

function Counter ({
    updateWaterConsumption
}) {
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
