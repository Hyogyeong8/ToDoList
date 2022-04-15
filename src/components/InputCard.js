import React, { useState } from "react";
import './InputCard.css';

const InputCard = ({ setList }) => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [due, setDue] = useState('');
  const [importance, setImportance] = useState("");
  const [id, setId] = useState(0);
  const [reset2, setReset2] = useState(false);

  const addHandler = () => {
    if(title===""){
      alert("제목을 입력해 주세요");
    } else if (due===""){
      alert("기한을 입력해 주세요");
    } else if (importance===""){
      alert("중요도를 설정해 주세요");
    } else{
      setList(list => [...list, {title: title, desc: desc, due: due, importance: importance, id: id}]);
      setId(id+1);
      setTitle("");
      setDesc("");
      setDue("");
      setImportance("");
      setReset2(false); 
    }
  }

  return (
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
  )
}

export default InputCard;
