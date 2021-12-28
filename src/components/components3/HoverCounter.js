import React from 'react';


   const HoverCounter = ({incrementCount, count}) =>{
       return (
           <div>
               <h1 onMouseOver={incrementCount}> Hover {count} times </h1>
           </div>
       )

   }

  export default HoverCounter;



