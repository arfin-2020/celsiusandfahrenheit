import React, { useState } from 'react' ;

const Counter =  () =>{
    const [count, setCount] = useState(0);
    let i ;

    const addFive = () =>{

    for(i=0;i<5;i++){
            setCount((prevState)=>prevState+1);   
        }
    }
      
    return(
        <div>   
                <p>{count}</p>
                <button onClick={()=>setCount((prevState)=>prevState + 1)}>Add+1</button>
                <button onClick={addFive}>Add+5</button>
        </div>
    )
}
export default Counter;