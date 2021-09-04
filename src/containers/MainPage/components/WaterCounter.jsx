import css from '../../../styles/WaterCounter.module.css';
import {useState} from 'react';

function WaterCounter () {
    const [count, setCount] = useState(0);

    return (
        <div className="waterCounter">
            <h2>Water counter</h2>

            <div className={css.counter}>
                <button
                    onClick={() => setCount(count - 1)}
                    className={css.counterBtn}
                >-</button>
                <div className={css.countNum}>{count}</div>
                <button
                    onClick={() => setCount(count + 1)}
                    className={css.counterBtn}
                >+</button>
            </div>

            <div className={css.progressbar}>
                <span>Drank today: </span>
                <span>{count}</span>
                <span> glasses of water</span>
            </div>
        </div>
    );
}

export default WaterCounter;
