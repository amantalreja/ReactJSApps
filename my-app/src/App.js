import './App.css';
import Greet from './Greet'
import Clicker from './Clicker'
import EventHandler from './EventHandler';
function App() {
  return (
    <div className="App">
      <Greet count='100'></Greet>
      <Clicker></Clicker>
      <EventHandler></EventHandler>
    </div>
  );
}

export default App;
