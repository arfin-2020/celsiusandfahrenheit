import { useState } from "react";

const DecreaseCounter = ({children}) => {
    const [count, setCount] = useState(0);

    const increaseFuntion = () =>{
        setCount(count + 2)
    }
    return children(count,increaseFuntion);
}

export default DecreaseCounter
