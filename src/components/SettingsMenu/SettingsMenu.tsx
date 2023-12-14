import React, {ChangeEvent, useState} from 'react';
import styles from "./SettingsMenu.module.css";
import {ControlButton} from "../Counter/ControlButton";
import {CounterSettings} from "../../App";

type PropsType = {
    /*  maxValue: number
      startValue: number*/
    settings: CounterSettings
    setCurrentSettings: (settings: CounterSettings) => void
    setAreSettingsChanged: (status: boolean) => void
    areSettingsChanged: boolean
    /*    changeMaxValue: (event: ChangeEvent<HTMLInputElement>) => void
        changeStartValue: (event: ChangeEvent<HTMLInputElement>) => void*/
}
export const SettingsMenu = (props: PropsType) => {


    const [maxValue, setMaxValue] = useState<number>(props.settings.maxValue)
    const [startValue, setStartValue] = useState<number>(props.settings.startValue)

    const callBackHandler = (maxValue: number, startValue: number) => {
        console.log('нажатие на кнопку SET')
        console.log('установленное maxValue: ', maxValue)
        console.log('установленное startValue: ', startValue)

        props.setCurrentSettings({
            maxValue,
            startValue,
        })
        // после установки настроек блокирем кнопку
        props.setAreSettingsChanged(false)
    }

    const handleMaxValueChange = (event: ChangeEvent<HTMLInputElement>) => {
        console.log('звонок из handleMaxValueChange')
        const value = parseInt(event.currentTarget.value)
        setMaxValue(value)

        // измениние статуса, что настройки изменились, по этому изменению разблокируем кнопку
        // и показть надпись
        props.setAreSettingsChanged(true)

    }

    const handleStartValueChange = (event: ChangeEvent<HTMLInputElement>) => {
        console.log('звонок из handleStartValueChange')
        const value = parseInt(event.currentTarget.value)
        setStartValue(value)
    }

    return (
        <div className={styles.settingsWrapper}>

            <div className={styles.settings}>
                <div className={styles.inputWrapper}>
                    Max Value:<input type="number" value={maxValue} onChange={handleMaxValueChange} className={styles.input}/>
                </div>
                <div className={styles.inputWrapper}>
                    Start Value:
                    <input type="number" value={startValue} onChange={handleStartValueChange}/>
                </div>
            </div>

            <div className={styles.buttonsWrapper}>
                <ControlButton name={'set'} callBack={() => callBackHandler(maxValue, startValue)}
                               disabled={!props.areSettingsChanged}/>
            </div>


        </div>

    );
};
