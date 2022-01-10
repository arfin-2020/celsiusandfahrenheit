import React, { useReducer } from 'react';

const initialState = 0;
const initialState2 = 5;
const reducer =  (currentState, action) =>{
    switch(action){
        case 'increment' :
            return currentState + 1;
        case 'decrement':
            return currentState - 1; 
        default: 
        return currentState;
    }
    
}
const CounterThree =  () =>{
    const [count, dispatch] = useReducer(reducer, initialState);
    const [count1, dispatch1] = useReducer(reducer, initialState2);
      
    return(
        <div>
            <div>   
                <p>{count}</p>
                <button type="button" onClick={()=>dispatch('increment')}>Increment</button>
                <button type="button" onClick={()=>dispatch('decrement')}>Decrement</button>
        </div>
        <div>   
                <p>{count1}</p>
                <button type="button" onClick={()=>dispatch1('increment')}>Increment</button>
                <button type="button" onClick={()=>dispatch1('decrement')}>Decrement</button>
        </div>
        </div>
    )
}
export default CounterThree;