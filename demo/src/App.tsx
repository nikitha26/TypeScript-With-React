import React from 'react';
import Greet from './components/Greet';
import './App.css';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';


function App() {
  const person = {
    fname:'Nikitha',
    lname:'Malkapuram'
  }
  const personList = [
    {
      fname:'Nikitha',
      lname:'Malkapuram'
    },
    {
      fname:'Ram',
      lname:'abcd'
    },
    {
      fname:'John',
      lname:'abcd'
    }
  ]
  return (
    <div className="App">
      {/* <Greet name='nikitha' age={23} isLogedIn={true}/> */}
      {/* <Person name={person}/> */}
      {/* <PersonList names={personList}/> */}
      <Status status = 'loading'/>
    </div>
  );
}

export default App;