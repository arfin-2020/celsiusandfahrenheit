import React from 'react';
import ClickCounter from '../../components3/practiseComponents/ClickCounter';
import ThemeContext from '../../components4/Contexts/ThemeContext';
import DecreaseCounter from '../../components4/practiseComponents/DecreaseCounter';

const Section = () => {
    return (
        <div>
             <DecreaseCounter>
                {(count,increaseFuntion)=>{
                    return <ThemeContext.Consumer>{({theme}) => <ClickCounter theme={theme} increaseFuntion={increaseFuntion} count={count}/>}</ThemeContext.Consumer>
                }}
            </DecreaseCounter>
        </div>
    )
}

export default Section
