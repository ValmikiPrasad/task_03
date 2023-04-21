import React, { useState } from "react";
import "./index.css";
// import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
const TodoList=(props)=>{
    const[line,setline]=useState(false);

    const cutIt=()=>{
        setline(true);
    }
   return (
      <>
      <div className="list_sec">
      {/* <Button className="btn" onClick={()=>{
         props.onSelect(props.id)
      }}><DeleteIcon/></Button> <li>{props.item}</li>
      </div> */}
        <button className="btn" onClick={cutIt}><CancelOutlinedIcon/></button>
       <li style={{textDecoration : line?"line-Through":"none"}}>{props.item}</li>
      </div>
      </>
   )
}
export default TodoList;