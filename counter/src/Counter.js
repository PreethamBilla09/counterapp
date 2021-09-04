import React, { useState } from 'react';
import styles from './Counter.module.css';
import classNames from 'classnames';

let Counter = ({ initial = 1, max_limit = 1000 }) => {
    let [counter, setCounter] = useState(initial);
    return (
        <div className={classNames(styles.outerContainer)}>
            <div
                className={classNames(styles.decrement)}
                onClick={() => setCounter(Math.max(Math.min(counter - 1, max_limit), initial))}>
                <span className={classNames(styles.text)}>-</span>
            </div>
            <div className={classNames(styles.counter)}>
                <input
                    type="number"
                    className={classNames(styles.counterInput)}
                    value={counter}
                    onChange={(e) => !isNaN(e.target.value) && setCounter(Number(e.target.value))} />
            </div>
            <div
                className={classNames(styles.increment)}
                onClick={() => setCounter(Math.min(Math.max(counter + 1, initial), max_limit))}>
                <span className={classNames(styles.text)}>+</span>
            </div>
        </div>
    );
}

export default Counter;