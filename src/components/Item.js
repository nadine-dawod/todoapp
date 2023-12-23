import { useState } from "react";
import Card from "./Card";
import Checkbox from "./Checkbox";
import {MdDeleteForever, MdEdit, MdOutlineCalendarToday} from "react-icons/md";


const Item = ({ todo, handleDelete, editTodo }) => {

    const [done, setDone] = useState(todo.done);

    const handleChange = (e) => {
        setDone(e.target.checked);
    }

/*     const [title, setTitle] = useState("Title");
    const [task, setTask] = useState("Task"); */

    return (
        <Card>
            <div className="card-container">
            <div className="flex-container">
                <div className="title">{todo.title}</div>
                <div className="btns">
                    
                    <MdEdit 
                    style={{color: "#f7cd62", marginRight: ".5rem"}} 
                    onClick={() => editTodo(todo)}/>  

                    <MdDeleteForever 
                    style={{color: "#ed844f"}} 
                    onClick={() => handleDelete(todo.id)}/>
                    
                </div>
            </div>
            
            <div className="task">{todo.task}</div>
            <div className="flex-container"> 
                <div className="day">
                    <MdOutlineCalendarToday 
                    className="calendar"/>
                    <p>{todo.day}</p>
                </div>

       
            <Checkbox 
            label={done === true ? "Done" : "Doing"} 
            value={done} 
            onChange={handleChange}
            />
        </div>
        </div>
    </Card>
    );
    
    };
    export default Item;