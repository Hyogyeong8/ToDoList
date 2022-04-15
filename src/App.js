import './App.css';
import React, {useState} from 'react';
import InputCard from './components/InputCard';
import CardView from './components/CardView';

function App() {
  const [list, setList] = useState([]);

  return (
    <div className="App">
      <h1>To Do List</h1>
      <InputCard setList={setList}/>
      <CardView setList={setList} list={list}/>
    </div>
  );
}

export default App;
