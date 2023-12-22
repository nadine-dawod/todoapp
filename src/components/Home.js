import { useState } from "react";

import List from "./List";
import todoData from "../data/Todo";
import Form from "./Form";

const Home = () => {
    
    const [todo, setTodo] = useState(todoData);

    return (
        <div className="container">
            <Form />
            <List todo={todo} />
        </div>
    );
};

export default Home;