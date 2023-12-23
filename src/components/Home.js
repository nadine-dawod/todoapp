import { useState } from "react";
import {v4 as uuidv4 } from "uuid";

import List from "./List";
import todoData from "../data/Todo";
import Form from "./Form";

const Home = () => {
    
    const [todo, setTodo] = useState(todoData);

    const addTodo = (newTodo) => {
        newTodo.id = uuidv4();
        setTodo([newTodo, ...todo]);
    };
 
    return (
        <div className="container">
            <Form addTodo={addTodo}/>
            <List todo={todo} />
        </div>
    );
};

export default Home;