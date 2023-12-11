import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Counter} from './components/Counter/Counter';
import {SettingsMenu} from "./components/SettingsMenu/SettingsMenu";

function App() {
    return (
        <div className="App">
            <SettingsMenu/>
            <Counter/>

        </div>

    );
}

export default App;

