import React, {ChangeEvent, useState} from 'react';
import styles from "./SettingsMenu.module.css";
import {ControlButton} from "../Counter/ControlButton";
import {CounterSettings} from "../../App";

type PropsType = {
  /*  maxValue: number
    startValue: number*/
    settings: CounterSettings
    setCurrentSettings: (settings: CounterSettings) => void
/*    changeMaxValue: (event: ChangeEvent<HTMLInputElement>) => void
    changeStartValue: (event: ChangeEvent<HTMLInputElement>) => void*/
}
export const SettingsMenu = (props: PropsType) => {
    const [maxValue, setMaxValue] = useState<number>(props.settings.maxValue)
    const [startValue, setStartValue] = useState<number>(props.settings.startValue)
    const callBackHandler = (maxValue:number, startValue:number) => {
        console.log('нажатие на кнопку SET')
        console.log('установленное maxValue: ', maxValue)
        console.log('установленное startValue: ', startValue)
        props.setCurrentSettings({
            maxValue,
            startValue,
        })

    }

    const handleMaxValueChange = (event: ChangeEvent<HTMLInputElement>) => {
        console.log('звонок из handleMaxValueChange')
        const value = parseInt(event.currentTarget.value)
        setMaxValue(value)
    }

    const handleStartValueChange = (event: ChangeEvent<HTMLInputElement>) => {
        console.log('звонок из handleStartValueChange')
        const value = parseInt(event.currentTarget.value)
        setStartValue(value)
    }

    return (
        <div>
            <div className={styles.settingsWrapper}>
                <div className={styles.countBoard}>
                    <div>
                        <div>
                            Max Value: <input type="number" value={maxValue} onChange={handleMaxValueChange}/>
                        </div>
                        <br/>
                        <div>
                            Start Value:
                            <input type="number" value={startValue} onChange={handleStartValueChange}/>
                        </div>
                    </div>

                    <div className={styles.buttonsWrapper}>
                        <ControlButton name={'set'} callBack={()=>callBackHandler(maxValue,startValue)} disabled={false}/>
                    </div>

                </div>
            </div>


        </div>
    );
};
