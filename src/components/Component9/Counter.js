import React, { useReducer } from 'react';

const initialState = 0;
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
const Counter =  () =>{
    const [count, dispatch] = useReducer(reducer, initialState);
      
    return(
        <div>   
                <p>{count}</p>
                <button type="button" onClick={()=>dispatch('increment')}>Increment</button>
                <button type="button" onClick={()=>dispatch('decrement')}>Decrement</button>
        </div>
    )
}
export default Counter;