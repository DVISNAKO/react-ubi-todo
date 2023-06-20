import React from 'react';
import { useState } from 'react';

const InputValue = () => {

    const [value, setValue] = useState('');

    const changeValue = (e) => {
        e.preventDefault();
        setValue(e.target.value);
    }

    return (
        <div>
            <h1>{value}</h1>
            <input
            onChange={changeValue}
            type='text'
            value={value}/>
        </div>
    );
};

export default InputValue;