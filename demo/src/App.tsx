import React from 'react';
import Greet from './components/Greet';
import './App.css';

function App() {
  return (
    <div className="App">
      <Greet name='nikitha' age={23}/>
    </div>
  );
}

export default App;
