import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Counter} from './components/Counter/Counter';

function App() {
  return (
    <div className="container">
      СЧЁТЧИК
        <Counter />
    </div>
  );
}

export default App;
