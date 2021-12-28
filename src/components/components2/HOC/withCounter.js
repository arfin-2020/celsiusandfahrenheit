
// import React, { useState } from 'react';
// const withCounter = (OriginalComponent) => {
//     const NewComponent = () => {
//         const [count, setCount] = useState(0);
//         const incrementCount = () => {
//             setCount(count + 1)
//         }
//         return <OriginalComponent count={count} incrementCount={incrementCount}/>
//     }
//     return NewComponent;
// }

import { useState } from "react";

// export default withCounter;


const withCounter = (OriginalComponent) =>{
    const NewComponent =  () =>{
        const [count, setCount] = useState(0);
        const incrementDoubleCount = () =>{
            setCount(count + 2);
        }
        return <OriginalComponent count={count} incrementDoubleCount={incrementDoubleCount}/>
    }
    return NewComponent;
}

export default withCounter;