import React, { useState } from 'react';


const TemperatureInput =  () =>{
    const [temperature, setTemperature] =  useState('');

    const onTemperatureChange = (e) =>{
        setTemperature(e.target.value)
    }
    const BoilingVerdict = ({calsius}) =>{
        if(calsius == 100){
            return <p>It would be boil water.</p>
        }
       else if(calsius >=200){
            return <p>It cross 200 degree calsius</p>
        }
        else{
            return <p>It not a boil water</p>
        }
    }
    return(
        <div>
        <fieldset>
        <legend>Enter temperature in Celsius</legend>
            <input type='text' onChange={onTemperatureChange}/>
        </fieldset>
        <BoilingVerdict calsius={temperature}/>
        </div>
)
}

export default TemperatureInput;