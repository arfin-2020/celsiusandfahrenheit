export const toCelcius = (fahrenheit) =>{
    return ((fahrenheit - 32) * 5) / 9;
}

export const toFehrenheit = (celcius) =>{
    return (celcius * 9) / 5 +32;
}
export const toAddition = (addition) =>{
    return addition *20;
}
export const convert = (temperature, convertTo) =>{
    const input =  parseFloat(temperature);
    if(Number.isNaN(input)){
        return ''
    }
    const output =  convertTo(input);
    const rounded = Math.round(output*1000)/1000;
    return rounded.toString()

}