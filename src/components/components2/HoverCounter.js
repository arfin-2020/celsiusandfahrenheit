// import React from 'react';

// const  HoverCounter  = ({count, increase}) => {
      
//         return (
//             <div>
//                 <h1 onMouseOver={increase}>Clicked {count} Hover</h1>
//             </div>
//         )
// }

// export default HoverCounter;

import withCounter from './HOC/withCounter';

const  HoverCounter  = ({incrementCount, count}) => {
      
        return (
            <div>
                <h1 onMouseOver={incrementCount}>Clicked {count} Hover</h1>
            </div>
        )
}

export default withCounter(HoverCounter);