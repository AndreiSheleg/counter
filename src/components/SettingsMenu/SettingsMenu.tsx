import React, {ChangeEvent, useState} from 'react';

export const SettingsMenu = () => {
    const [maxValue, setMaxValue] = useState<number>(0)
    const [startValue, setStartValue] = useState<number>(0)

    const handleMaxValueChange = (event: ChangeEvent<HTMLInputElement>) => {
        //console.log(event.currentTarget.value)
        const value = parseInt(event.currentTarget.value)
        setMaxValue(value)
    }

    const handleStartValueChange = (event: ChangeEvent<HTMLInputElement>) => {
        //console.log(event.currentTarget.value)
        const value = parseInt(event.currentTarget.value)
        setStartValue(value)
    }


    return (
        <div>
            SettingsMenu
            <div>
                Max Value:
                <input type="number" value={maxValue} onChange={handleMaxValueChange}/>
            </div>

            <br/>

            <div>
                Start Value:
                <input type="number" value={startValue} onChange={handleStartValueChange}/>
            </div>
        </div>
    );
};
