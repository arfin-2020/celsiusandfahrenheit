import { useState } from 'react';
import './App.css';
import MyFunctionalComponent from './components/Component6/MyFunctionalComponent';

function App() {
  const [theme, setTheme] = useState('dark')
  

  const switchTheme = () =>{
    if(theme === 'dark'){
           setTheme('light')
        }
        else{
           setTheme('dark')
        }
  }
  
  return (
    <div className="App">
      {/* <Calculator/> */}
      {/* <ClickCounter buttonCount={buttonCount} Buttonincrease={Buttonincrease} />
      <HoverCounter count={count} increase={increase} /> */}
      {/* <ClickCounter />
      <HoverCounter  /> */}
      {/* <MainFunction/> */}
      {/* <ClickCounter /> */}
      {/* <HoverCounter  /> */}
      {/* <User render={(isLoggedIn)=>isLoggedIn ? 'Arfin' : 'Guest'}/> */}
      {/* <Counter render={(count, incrementCount)=>(<ClickCounter count={count} incrementCount={incrementCount}/>)}/>
      
      <Counter render={(count, incrementCount)=>(<HoverCounter count={count} incrementCount={incrementCount}/>)}/> */}
      {/* <ClickCounter/> */}

     {/* <ThemeContext.Provider value={{theme: theme, switchTheme: switchTheme}}><Section /></ThemeContext.Provider> */}

    {/* <Todo/> */}
      {/* <Counter/> */}
      {/* <MyComponentClass/> */}
      <MyFunctionalComponent/>
    </div>
  );
}

export default App;
