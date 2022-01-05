// import React, { useState } from "react";

// const Todo = () => {
//     const [todo, setTodo] = useState("");
//     const [warning, setWarning] = useState("");

//     const handleInput = e => {
//         const inputValue = e.target.value;
//         const warning = inputValue.includes(".js")
//             ? "You need javaScript Skill"
//             : null;
//         setTodo(inputValue);
//         setWarning(warning);
//     };
//     return (
//         <div>
//             <p>{todo}</p>
//             <p>
//                 <textarea name="todo" value={todo} onChange={handleInput} />
//             </p>
//             <hr />
//             <h2>{warning || "Good Choice!"}</h2>
//         </div>
//     );
// };

// export default Todo;



import React, { useState } from 'react';


const Todo = () => {
    const [todo, setTodo] = useState('');  
    const [warning, setWarning] = useState('');
  
    const handleInputValue = (e) =>{
        const inputValue = e.target.value;
        const warning = inputValue.includes('.js') ? "You need javaScript skill" : 'Good Choice';
        setWarning(warning);
        setTodo(inputValue)
    }
    return (
        <div>
        <h5>{todo}</h5>
            <textarea value={todo} name="todo" onChange={handleInputValue} />
            <h2>{warning}</h2>
        </div>
    )
}

export default Todo;

