import './App.css';
import Section from './components/components4/practiseComponents/Section';
// import Counter from './components/components3/Counter';

function App() {
  const theme = 'darkd'
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

     <Section theme={theme}/>

    </div>
  );
}

export default App;
