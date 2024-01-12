import { Fragment, React, useState } from 'react';

import PropTypes from 'prop-types';

const CounterApp = ({ value = 0 }) => {
    const [ counter, setCounter] = useState( value );

    function handleAdd(event) {
        // console.log(event);
        setCounter(counter + 1)
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>

            <div className='buttons-container'>
                <button className='increment-button' onClick={ handleAdd }>+1</button>
                <button className='decrement-button'>-1</button>
            </div>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
}

export default CounterApp