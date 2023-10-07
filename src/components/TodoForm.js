import {useState} from "react";

const TodoForm = ({addTodo}) => {
  const [value, setValue] = useState("");
  const inputChangeHandler = (event)=> {
    setValue(event.target.value);
  }
  const submitHandler = (event)=> {
    event.preventDefault();
    addTodo(value);
    setValue("");
  }
  return (
    <form className="TodoForm" onSubmit={submitHandler}>
      <input
        type="text"
        className="todo-input"
        placeholder="What is the task today?"
        value={value}
        onChange={inputChangeHandler}
      />

      <button type="submit" className="todo-btn">
        Task
      </button>
    </form>
  );
};

export default TodoForm;
