import React from 'react'
import {useState} from "react";
 
export default function Todo() {
        const [query, setQuery] = useState("");
        const [task, setTask] = useState([]);

      
    const handleChange = (e)=>{

        setQuery(e.target.value);
    }

    const handleAdd =()=>{
        const payload = {
            title:query,
            status:false
        }
        let newTask =[...task,payload];
        setTask(newTask);
      
    }
    // console.log(task);
    return (
       <>
        <div>
            <input value={query} onChange={handleChange} type="text"></input>
            <button onClick={handleAdd} >Add Todo</button>
        </div>
        <div>
            {task.map((item)=>{
                return <div>{item.title} <button>Delete</button></div>

            })}
        </div>
       </>
    )
}
