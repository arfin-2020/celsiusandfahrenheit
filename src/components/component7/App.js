import React, { useCallback, useMemo, useState } from "react";
import Button from "./Button";
import ShowCount from "./ShowCount";
import Title from "./Title";

export const App1 = () => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    const incrementByOne = useCallback(() => {
        setCount1(prevState => prevState + 1);
    }, []);

    const incrementByFive = useCallback(() => {
        setCount2(prevState => prevState + 5);
    }, []);

    const isEvenOrOdd = useMemo(() => {
        let i = 0;
        while(i < 10000000) i += 1;
        return count1 %2 === 0;
    },[count1]);
    
    return (
        <div>
            <Title />
            <ShowCount count={count1} title="Counter 1" />
            <Button handleClick={incrementByOne}> increment By One </Button>
            <span>{isEvenOrOdd ? 'Even' : 'Odd'}</span>
            <hr />
            <ShowCount count={count2} title="Counter 2" />
            <Button handleClick={incrementByFive}> increment By Five </Button>
        </div>
    );
};

export default App1;
