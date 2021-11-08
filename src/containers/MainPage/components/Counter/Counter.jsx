import css from "./Counter.module.css";
import {useState} from "react";
import UserService from "../../../../services/UserService";
import getCurrentDay from "../../../../helpers/getCurrentDay";

function Counter ({
    updateWaterConsumption
}) {
    // todo: place into initial state a func not 0
    // 1.Get consumption array from LS, parse
    // 2.Find today's object water
    // 3.If no today's object: count=0, else count=water value

    const today = getCurrentDay();
    const [count, setCount] = useState(0);

    const increaseCount = () => {
        const newCount = count + 200;
        setCount(newCount);
        updateWaterConsumption(today, newCount, '+');
    }

    const decreaseCount = () => {
        const newCount = count - 200;
        setCount(newCount);
        updateWaterConsumption(today, newCount, '-');
    }

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
