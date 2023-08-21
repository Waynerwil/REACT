import React, { useState } from 'react';

function Counter() {

    //Declaro a variable con el estado inicial
    var [value, setValue] = useState(0);
    const increase = () => {
        setValue(value +1);
    }
    return (  
        <div>
            <p>El contador está en 0</p>
            <button onClick={increase}>Aumentar</button>
        </div>
    );
}

export default Counter;