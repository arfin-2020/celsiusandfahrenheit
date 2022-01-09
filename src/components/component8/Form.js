import { createRef, useEffect } from "react";
import Input from "./Input";

const Form = () => {
    const inputRef = createRef();
  
    useEffect(()=>{
        // console.log('This compoent loaded successfull.')
        // console.log(inputRef.current)
        inputRef.current.focus();
       
    },[])
    return (
        <div>
            <Input ref={inputRef} type ='text' placeholder="write something"/>
        </div>
    )
}

export default Form;
