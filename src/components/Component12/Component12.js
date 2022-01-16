import React from 'react';
import './assets/css/dark.css';
import Tutorial from './Tutorial';

const Component12 = () =>{
    // const [theme, setTheme] = useState('dark');

    // const switchTheme = () =>{
    //     if(theme === 'dark'){
    //         setTheme('dark')
    //     }
    //     else{
    //         setTheme('light')
    //     }

    // }
    
   export const UserContext = React.createContext('light');

    return(
        <div>
            <UserContext.Provider  value={'light'}>
            <Tutorial/>
            </UserContext.Provider>
        </div>
    )
}
export default Component12;