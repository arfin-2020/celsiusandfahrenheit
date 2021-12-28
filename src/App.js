import './App.css';
import ClickCounter from './components/components2/ClickCounter';
import HoverCounter from './components/components2/HoverCounter';

function App() {
  return (
    <div className="App">
      {/* <Calculator/> */}
      {/* <ClickCounter buttonCount={buttonCount} Buttonincrease={Buttonincrease} />
      <HoverCounter count={count} increase={increase} /> */}
      <ClickCounter />
      <HoverCounter  />
      {/* <MainFunction/> */}
    </div>
  );
}

export default App;
