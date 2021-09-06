import css from './WaterCounter.module.css';
import {useState} from 'react';

function WaterCounter () {
    const [count, setCount] = useState(0);
    const increaseCount = () => setCount(count + 200);
    const decreaseCount = () => setCount(count - 200);

    return (
        <div className={css.waterCounter}>
            <h2>Water counter</h2>
            <h3>Type of drink: water</h3>

            <div className={css.counter}>
                <button
                    onClick={decreaseCount}
                    className={css.counterBtn}
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
                <span> ml of water</span>
            </div>
        </div>
    );
}

export default WaterCounter;
