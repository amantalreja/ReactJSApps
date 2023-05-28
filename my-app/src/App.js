import './App.css';
import Greet from './Greet'
import Clicker from './Clicker'
function App() {
  return (
    <div className="App">
      <Greet count='100'></Greet>
      <Clicker></Clicker>
    </div>
  );
}

export default App;
