// import React from 'react';

// const  ClickCounter  = ({buttonCount,Buttonincrease}) =>{
//     // console.log(count,increase)
//         return (
//             <div>
//                 <button type ='button' onClick={Buttonincrease}>Clicked {buttonCount} times</button>
//             </div>
//         )
// }

// export default ClickCounter;

import React from 'react';
import withCounter from './HOC/withCounter';

const  ClickCounter  = ({incrementCount, count}) =>{
    // console.log(count,increase)
        return (
            <div>
                <button type ='button' 
                onClick={incrementCount}>Clicked {count} times</button>
            </div>
        )
}

export default withCounter(ClickCounter);