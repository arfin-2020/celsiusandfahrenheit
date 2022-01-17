import React, { useState } from 'react';
import './assets/css/dark.css';
import Tutorial from './Tutorial';



export const ThemeContext = React.createContext();
const Component12 = () =>{
    const [theme, setTheme] = useState('dark');

    const switchTheme = () =>{
        if(theme === 'dark'){
            setTheme('light')
        }
        else{
            setTheme('dark')
        }

    }
    
   

    return(
        <div>
            <ThemeContext.Provider  value={{theme,switchTheme}}>
            <Tutorial/>
            </ThemeContext.Provider>
        </div>
    )
}
export default Component12;