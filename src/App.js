import { useState } from 'react'
import './App.css';
import Remote from './components/remote'

function App() {

  const [pressed, setPressed] = useState(false)
  console.log(pressed)
  return (
    <div className="App">
      <span class="led" style={{backgroundColor: pressed ? "Green" : ""}} ></span>
      <Remote setPressed={setPressed} />
    </div>
  );
}

export default App;
