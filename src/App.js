import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';

function App() {
  const [list, setList] = useState([]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [due, setDue] = useState("");
  const [importance, setImportance] = useState("");
  const [mode, setMode] = useState("전체");
  const [id, setId] = useState(0);
  const [reset, setReset] = useState("true");
  const [reset2, setReset2] = useState("false");

  const addHandler = () => {
    if(title===""){
      alert("제목을 입력해 주세요");
    } else if (due===""){
      alert("기한을 입력해 주세요");
    } else if (importance===""){
      alert("중요도를 설정해 주세요");
    } else{
      setList([...list, {title: title, desc: desc, due: due, importance: importance, id: id}]);
      setId(id+1);
      setTitle("");
      setDesc("");
      setDue("");
      setImportance("");
      setReset2(false); 
    }
  }
  
  const deleteHandler = (inputId) => {
    var cp = [];
    cp = list.filter((toDo)=>toDo.id !== inputId);
    setList(cp);
  }

  return (
    <div className="App">
      <h1>To Do List</h1>
      <div className="card">
        <div className="textInput">
          <input onChange={e=>{setTitle(e.target.value)}} value={title} placeholder="제목"></input>
          <br/>
          <textarea rows="5" onChange={e=>{setDesc(e.target.value)}} value={desc} placeholder='내용'></textarea>
          <br/>
          <input onChange={e=>{setDue(e.target.value)}} value={due} placeholder='기한'></input>
          <br/> 
        </div>
        
        <div onChange={e=>{
          setImportance(e.target.value)
          setReset2("true")
        }} value={importance}>
          <div className="radioInput">중요도   </div>
          <label><input type="radio" name="impor" value="상" checked={reset2&&importance==="상"}/>상</label>
          <label><input type="radio" name="impor" value="중" checked={reset2&&importance==="중"}/>중</label>
          <label><input type="radio" name="impor" value="하" checked={reset2&&importance==="하"}/>하</label>
        </div>
        
        <button onClick={addHandler}>추가</button>
        
      </div>

      <div className="card mode">
        <div onChange={e=>{
          setMode(e.target.value)
          setReset(false);
        }} value={mode}>
          <label><input type="radio" name="mode" value="전체" checked={reset||mode==="전체"}/>전체 </label>
          <label><input type="radio" name="mode" value="상" checked={mode==="상"}/>상 </label>
          <label><input type="radio" name="mode" value="중" checked={mode==="중"}/>중 </label>
          <label><input type="radio" name="mode" value="하" checked={mode==="하"}/>하</label>
        </div>
      </div>

      {list.map((toDo, index)=>{
        return <div>
          {
            mode==="전체" | mode === toDo.importance
            ?<div className="card" key={index}>
              <div className="title">
                {toDo.title}
              </div>
              <span className="importance">
                {toDo.importance}
              </span>
              <div className="due">
                {toDo.due}
              </div>
              <div className="desc">
                {toDo.desc}
              </div>
              <br/>
              <button onClick={()=>{deleteHandler(toDo.id)}}>삭제</button>
            </div>
            : null
          }
        </div>
      })}
    </div>
  );
}

export default App;
