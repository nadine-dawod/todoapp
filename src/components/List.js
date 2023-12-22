import Item from "./Item";


const List = ({ todo }) => {
    return (
    <div className="todo-list">
        {todo.map((item) => (
            <Item key={item.id} todo={item} /> 
        ))}
    </div>
    )
};
export default List; 