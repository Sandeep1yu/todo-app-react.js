import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Todo = ({ task, deleteTodo, editTodo }) => {
  return (
    <div className="Todo">
      <p>{task.task}</p>
      <div>
        <FontAwesomeIcon className="edit-icon" onClick={()=> editTodo(task.id)} icon={faPenToSquare} />
        <FontAwesomeIcon
          className="delete-icon"
          icon={faTrash}
          onClick={() => deleteTodo(task.id)}
        />
      </div>
    </div>
  );
};

export default Todo;
