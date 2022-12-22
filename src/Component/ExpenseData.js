// import ExpenseForm from "./ExpenseForm";
import DeleteImage from "./DeleteImage";
import EditImage from "./EditImage";

const ExpenseData = ({ todos, setTodos }) => {
  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      {todos.map((todo) => (
        <li className="list-item" key={todo.id}>
          <input
            type="text"
            value={todo.title}
            className="list"
            onChange={(event) => event.preventDefault()}
          />
          <div>
            <button className="button-edit task-button" >
              
              <i><EditImage/></i>
              
            </button>
          </div>
          <div>
            <button
              className="button-delete task-button"
              onClick={() => handleDelete(todo)}
            >
              <i><DeleteImage/></i>
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};
export default ExpenseData;
