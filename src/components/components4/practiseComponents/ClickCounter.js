import React from 'react';

const ClickCounter = ({increaseFuntion, count}) => {
   
    return (
        <div>
            <button onClick={increaseFuntion}>increase  {count} times</button>
        </div>
    )
}

export default ClickCounter;
