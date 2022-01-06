import React, { useEffect, useState } from 'react';

const MyFunctionalComponent = () => {
    const [count, setCount] = useState(0);
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        // console.log('render')
        document.title = `Clicked ${count} times`;
    }, [count])

    useEffect(()=>{
        console.log('starting timer')
       const interval= setInterval(tick, 1000);
        return ()=>{
            console.log('Component will unmount')
            clearInterval(interval)
        }
    },[])
    const addClick = () => {
        setCount((prevState) => prevState + 1);
    }
    const tick = () => {
        console.log('ticking')
        setDate(new Date())
    }
    return (
        <div>
            <p>{count}</p>
            <p>Time: {date.toLocaleTimeString()}</p>
            <p>
                <button type="button" onClick={addClick}>
                    Click
                </button>
            </p>
        </div>
    )
}

export default MyFunctionalComponent
