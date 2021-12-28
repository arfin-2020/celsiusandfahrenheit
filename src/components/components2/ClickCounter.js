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


import withCounter from './HOC/withCounter';

const  ClickCounter  = ({incrementDoubleCount, count}) =>{
    // console.log(count,increase)
        return (
            <div>
                <button type ='button' 
                onClick={incrementDoubleCount}>Clicked {count} times</button>
            </div>
        )
}

export default withCounter(ClickCounter);