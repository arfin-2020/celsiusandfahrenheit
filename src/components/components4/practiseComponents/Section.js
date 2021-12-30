import React from 'react'
import ClickCounter from '../../components3/practiseComponents/ClickCounter'
import DecreaseCounter from '../../components4/practiseComponents/DecreaseCounter'

const Section = ({theme}) => {
    return (
        <div>
             <DecreaseCounter>
                {(count,increaseFuntion)=><ClickCounter theme={theme}increaseFuntion={increaseFuntion} count={count}/>}
            </DecreaseCounter>
        </div>
    )
}

export default Section
