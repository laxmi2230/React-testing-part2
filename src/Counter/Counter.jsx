import React, { useState } from 'react'
import "./Counter.css";

function Counter() {
    const [counterValue, setCountervalue] = useState(0);
    const [inputValue, setInputValue] = useState(1);

    const addToCounter = () => {
        setCountervalue(counterValue + inputValue);
    }

    const subtractFromCounter = () => {
        setCountervalue(counterValue - inputValue);
    }

    return (
        <div >
            <h3 data-testid="header">My Counter</h3>
            <h2 className={`${counterValue >= 100 ? "green" : ""}${counterValue <= -100 ? "red" : ""}`} data-testid="counter">{counterValue}</h2>
            <button data-testid="subtract-btn" onClick={subtractFromCounter}>-</button>
            <input className="text-center" type="number" data-testid="input" value={inputValue}
                onChange={(e) => {
                    setInputValue(parseInt(e.target.value));
                }} />
            <button data-testid="add-btn" onClick={addToCounter}>+</button>


        </div>
    )
}


export default Counter
