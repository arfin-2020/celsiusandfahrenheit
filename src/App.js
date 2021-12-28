import './App.css';
// import ClickCounter from './components/components2/ClickCounter';
// import HoverCounter from './components/components2/HoverCounter';
import ClickCounter from './components/components3/ClickCounter';
import HoverCounter from './components/components3/HoverCounter';
import User from './components/components3/User';

function App() {
  return (
    <div className="App">
      {/* <Calculator/> */}
      {/* <ClickCounter buttonCount={buttonCount} Buttonincrease={Buttonincrease} />
      <HoverCounter count={count} increase={increase} /> */}
      {/* <ClickCounter />
      <HoverCounter  /> */}
      {/* <MainFunction/> */}
      <ClickCounter />
      <HoverCounter  />
      <User render={(isLoggedIn)=>isLoggedIn ? 'Arfin' : 'Guest'}/>
    </div>
  );
}

export default App;
