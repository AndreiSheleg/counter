import React, {ChangeEvent, useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Counter} from './components/Counter/Counter';
import {SettingsMenu} from "./components/SettingsMenu/SettingsMenu";


export type CounterSettings = {
    maxValue: number,
    startValue: number,
}
function App() {


    const [settings, setSettings] = useState<CounterSettings>({
        maxValue: 5,
        startValue: 0,
    })

    let [count, setCount] = useState<number>(settings.startValue)
    let [error, setError] = useState<string | null>(null)

    useEffect(()=> {
        setCount(settings.startValue)
    }, [settings.startValue])

    const setCurrentSettings = (settings: CounterSettings) => {
        setSettings(settings)
    }


    const increaseCounter = () => {
        setCount(count + 1)
        if (count >= settings.maxValue) {
            setError('Limit of count!')
        }
    }

    const resetCount = () => {
        setCount(settings.startValue)
        setError(null)
    }

    return (
        <div className="App">
            <SettingsMenu settings={settings} setCurrentSettings={setCurrentSettings}/>
            <Counter maxValue={settings.maxValue} startValue={settings.startValue} count={count} increaseCounter={increaseCounter} resetCount={resetCount}/>

        </div>

    );/**/
}

export default App;

