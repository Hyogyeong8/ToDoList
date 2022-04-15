import React, {useState} from 'react';
import './CardView.css';

const CardView = ({setList, list}) =>{
  const [mode, setMode] = useState("전체");
  const [reset, setReset] = useState(true);
  
  const deleteHandler = (inputId) => {
    var cp = [];
    cp = list.filter((toDo)=>toDo.id !== inputId);
    setList(cp);
  }

  return <div>
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
}

export default CardView;