import React from 'react';

const ClickCounter = ({increaseFuntion, count, theme}) => {
    const style= theme === 'dark' ? {backgroundColor: '#000000', color: '#ffffff'} : {backgroundColor: '#00808080', color: '#ffffff'};
    return (
        <div>
            <h1 onMouseOver={increaseFuntion} style={style}>Increase  {count} times</h1>
        </div>
    )
}

export default ClickCounter;
