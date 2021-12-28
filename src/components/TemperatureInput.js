import React from 'react';


const TemperatureInput =  ({temperature, onTemperatureChange, scale}) =>{
    // console.log('-----', temperature, onTemperatureChange,scale);

    const scaleName={
        c: 'Celsius',
        f: 'fahrenheit'
    }
    const BoilingVerdict = ({calsius}) =>{
        if(calsius >= 100){
            return <p>It would be boil water.</p>
        }
    //    else if(calsius >=200){
    //         return <p>It cross 200 degree calsius</p>
    //     }
        else{
            return <p>It not a boil water</p>
        }
    }
    return(
        <div>
        <fieldset>
        <legend>Enter temperature in {scaleName[scale]}</legend>
            <input type='text' 
            value={temperature}
            onChange={(e)=>onTemperatureChange(e,scale)}/>
        </fieldset>
        <BoilingVerdict calsius={temperature}/>
        {<p>{temperature}</p>}
        </div>
)
}

export default TemperatureInput;