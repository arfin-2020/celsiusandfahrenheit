import React, { useState } from 'react';
import { convert, toAddition, toCelcius, toFehrenheit } from './lib/converter';
import TemperatureInput from './TemperatureInput';

const Calculator =  () =>{
    const [temperature, setTemperature] =  useState('');
    const [scale, setScale] = useState('c');

    
    const onTemperatureChange = (e, scale) =>{
       
        setTemperature(e.target.value);
        setScale(scale);
        // console.log('e--',e);
        // console.log('scale',scale);
    }
    const calcius =  scale === 'f' ? convert(temperature, toCelcius) : temperature;
    const fahrenheit = scale === 'c' ? convert(temperature, toFehrenheit) : temperature;
    const addition = scale === 'a' ? convert(temperature, toAddition) : temperature;
    console.log('celcius---', calcius);
    console.log('fahrenheit---', fahrenheit);
    return(
        <div>
            <TemperatureInput 
            temperature={calcius} 
            onTemperatureChange={onTemperatureChange} 
            scale='c'
            />

            <TemperatureInput 
            temperature={fahrenheit} 
            onTemperatureChange={onTemperatureChange} 
            scale='f'/>

            <TemperatureInput 
            temperature={addition} 
            onTemperatureChange={onTemperatureChange} 
            scale='a'/>
            
        </div>
    )
}

export default Calculator;