import { Fragment, React, useState } from 'react';

import PropTypes from 'prop-types';

const CounterApp = ({ value = 0 }) => {
    const [counter, setCounter] = useState(value);

    function handleAdd(event) {
        // console.log(event);
        setCounter(counter + 1)
    }

    function handleMinus(event) {
        setCounter(counter - 1)
    }

    function handleReset(event) {
        setCounter(value)
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>

            <div className='buttons-container'>
                <button className='button increment' onClick={handleAdd}>+1</button>
                <button className='button decrement' onClick={handleMinus}>-1</button>
                <button className='button reset' onClick={handleReset}>Reset</button>
            </div>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
}

export default CounterApp