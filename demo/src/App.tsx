import React, { useState } from 'react';
import Greet from './components/Greet';
import './App.css';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';
import Heading from './components/Heading';
import Oscar from './components/Oscar';
import Button from './components/Button';
import InputEvent from './components/InputEvent'; 
import Container from './components/Container';

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
  const [input,setInput] = useState();
  return (
    <div className="App">
      {/* <Greet name='nikitha'  isLogedIn={true}/> */}
      {/* <Person name={person}/> */}
      {/* <PersonList names={personList}/> */}
      {/* <Status status = 'loading'/> */}
      {/* <Heading>PlaceHolder Text</Heading> */}
      {/* <Oscar>
        <Heading>Hii I am from heading childeren props</Heading>
      </Oscar> */}
      {/* <Button handleClick={(event,id) => {
        console.log(event,id)
      }}/> */}
      <InputEvent value='' handleChange={(event) => {
        console.log(event.target.value)
      }}/>
      {/* <Container style={{border:'1px solid blue',color:'red'}}/> */}
    </div>
  );
}

export default App;