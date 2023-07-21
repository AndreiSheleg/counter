import React, {useState} from 'react';
import styles from './Counter.module.css'
import {ControlButton} from './ControlButton';

export const Counter = () => {
    let [count, setCount] = useState<number>(0)
    let [error, setError] = useState<string | null>(null)

    let maxCountValue = 5

    const increaseCounter = () => {
        setCount(++count)
        if (count >= maxCountValue) {
            setError('Limit of count!')
        }
    }

    const resetCount = () => {
        setCount(0)
        setError(null)
    }

const stylesCount = `${styles.count} ${count >= maxCountValue ? styles.countError : ''}`

    return (
        <div>
            <div className={styles.counterWrapper}>
                <div className={styles.countBoard}>
                    <div className={stylesCount}>{count}</div>
                </div>

                <div className={styles.buttonsWrapper}>
                    <ControlButton name={'increment'} callBack={increaseCounter} disabled={maxCountValue === count}/>
                    <ControlButton name={'reset'} callBack={resetCount} disabled={count === 0}/>
                </div>
            </div>


        </div>


    )
}


/*        <div className={styles.container}>
            <div className={styles.counterContainer}> <h1 className={count === maxCountValue ? styles.error : styles.counterValue}>{count}</h1></div>
            <div className={styles.buttonsContainer}>
                <ControlButton onClick={increaseCounter} disabled={maxCountValue === count} error={error} class={buttonClassName}>increment</ControlButton>
                <ControlButton onClick={resetCount} disabled={count === 0} error={error} class={count === 0 ? styles.buttonDisabled : styles.button}>reset</ControlButton>
            </div>
        </div>*/

/*        <div className={styles.container}> */