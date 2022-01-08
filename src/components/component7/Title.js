import React from 'react';

const Title = () => {
    console.log('rendering title..');
    return (
        <div>
            <h1>UseCallback Hook tutorial</h1>
        </div>
    )
}

export default React.memo(Title);
