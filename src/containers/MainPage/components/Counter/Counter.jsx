import css from "./Counter.module.css";

function Counter ({
    count,
    increaseCount,
    decreaseCount
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
        </div>
    );
}

export default Counter;
