import {useState} from "react";

const EditTodoForm = ({editTodo, task}) => {
  const [value, setValue] = useState(task.task);
  const inputChangeHandler = (event)=> {
    setValue(event.target.value);
  }
  const submitHandler = (event)=> {
    event.preventDefault();
    editTodo(value, task.id);
    setValue("");
  }
  
  
  return (
    <form className="TodoForm" onSubmit={submitHandler}>
      <input
        type="text"
        className="todo-input"
        placeholder="What do you want to edit?"
        value={value}
        onChange={inputChangeHandler}
      />

      <button type="submit"  className="todo-btn">
        Update Task
      </button>
    </form>
  );
};

export default EditTodoForm;
