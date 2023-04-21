import React, { useState } from "react";
import TodoList from "./TodoList";
// import AddIcon from '@material-ui/icons/Add';
// import { Tooltip } from "@material-ui/core";
// import AddCircleIcon from '@material-ui/icons/AddCircle';
import DeleteIcon from '@material-ui/icons/Delete';
// import Button from '@material-ui/core/Button';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import ClearAllIcon from '@material-ui/icons/ClearAll';
const App=()=>{
    const[listItem,setListItem]=useState("");
    const[listItems,setListItems]=useState([]);

    const InputEvent=(event)=>{
        setListItem(event.target.value);
    }
    const addItem=()=>{
        if(listItem.length===0){
            alert("plz enter the name of item!")
            return;
        }
        setListItems((preval)=>{
            return [...preval,listItem]
        })
        setListItem("");
    }
    const deleteItem=(id)=>{
        setListItems((oldValues)=>{
            return oldValues.filter((element,ind)=>{
                return id!==ind;
            })
        })
    }
    const dele_all=()=>{
        setListItems([]);
    }
    return(
        <>
            <div className="main_div">
                <div className="center_div">
                    <br/>
                    <h1>toDo list</h1>
                    <br/>
                    <div className="hell">
                    <input type="text" placeholder="Add items"
                    onChange={InputEvent}
                    value={listItem}/>
                    <button className="mat_btn" onClick={addItem} ><AddIcon/></button>
                    </div>
                    <br/>   
                    <ul>
                    {/* {listItems.map((itemValue)=>{
                        return( <li>{itemValue}</li>)   
                    })} */}
                    {listItems.map((Value,index)=>{
                       return <TodoList
                       key={index} 
                       id={index}
                       item={Value}
                       onSelect= {deleteItem}
                       />
                    })} 
                    
                    </ul>
                    <div >
                        <button className="dele_butt" onClick={dele_all}><ClearAllIcon/></button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default App;