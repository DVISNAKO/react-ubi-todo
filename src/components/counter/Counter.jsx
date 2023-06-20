import React, {useState}from 'react';
import './Counter.css';

const Counter = () => {
    const [counter, setCounter] = useState(0);


    const inc = () => {
        setCounter(prev => prev + 1);
    }

    const dec = () => {
        setCounter(prev => prev - 1);
    }
    return (
        <div className='counter'>
            <button onClick={inc}>Inc</button>
            <span>{counter}</span>
            <button onClick={dec}>Dec</button>
        </div>
    );
};

export default Counter;