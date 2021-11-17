import css from "./Counter.module.css";

function Counter ({
    count,
    increaseCount,
    decreaseCount,
    dailyWaterIntake
}) {
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
