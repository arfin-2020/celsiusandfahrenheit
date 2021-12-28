import React from 'react';

const ClickCounter = ({incrementCount ,count}) =>{
    return (
        <div>
            <button type ='button' 
                onClick={incrementCount}> Clicked {count} times
            </button>
        </div>
    )

}

export default ClickCounter;
   
 
  
   

