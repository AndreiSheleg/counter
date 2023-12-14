import React from 'react';
import styles from './ControlButton.module.css'

type ControlButtonPropsType = {
    name: string
    callBack: () => void
    disabled: boolean
}

export const ControlButton = (props: ControlButtonPropsType) => {

    const buttonClass = `${styles.button} ${props.disabled ? styles.disabled : ''}`
    // styles.button styles.disabled два класса или сколько угодно, поэтому строка
    return (
        <button disabled={props.disabled} onClick={props.callBack} className={buttonClass}>{props.name}</button>
    )
}
