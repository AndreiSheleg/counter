import React, {useState} from 'react';
import styles from './Counter.module.css'

export const Counter = () => {
    let [count, setCount] = useState<number>(0)
    let [error, setError] = useState<string | null>(null)

    let maxCountValue = 5

    const increaseCounter = () => {
        setCount(++count)
        if (count >=  maxCountValue) {
            setError('Limit of count!')
        }
    }

    const resetCount = () => {
        setCount(0)
        setError(null)
    }

    return (
        <div className={styles.container}>

            <div className={styles.container}>
                <div className={styles.display}>
                    <h1 className={error ? styles.error : ''}>{count}</h1>
                </div>
            </div>

            <div className={styles.container}>
                <div className={styles.buttonIncrement}>
                    <button disabled={maxCountValue === count ? true : false } className={styles.button} onClick={increaseCounter}>increment</button>
                    <button className={styles.button} onClick={resetCount}>reset</button>
                </div>
            </div>

        </div>
    )
}
