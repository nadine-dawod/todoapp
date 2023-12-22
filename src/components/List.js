import Item from "./Item";


const List = ({ todo }) => {

    if (!todo || todo.length === 0) {
        return <p>No ToDo's yet!</p>
    }

    return (
    <div className="todo-list">
        {todo.map((item) => (
            <Item key={item.id} todo={item} /> 
        ))}
    </div>
    )
};
export default List; 