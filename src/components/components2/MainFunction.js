import React, { useState } from 'react';
import ClickCounter from './ClickCounter';
import HoverCounter from './HoverCounter';

const  MainFunction =() => {
  const [count, setCount] = useState(0);
  const [buttonCount, setButtonCount] = useState(0);
  const increase = () => {
    setCount(count + 1)
  }
  const Buttonincrease = () => {
    setButtonCount(buttonCount + 1)
  }
    return (
        <div>
            <ClickCounter buttonCount={buttonCount} Buttonincrease={Buttonincrease} />
            <HoverCounter count={count} increase={increase} />
        </div>
    )
}

export default MainFunction
