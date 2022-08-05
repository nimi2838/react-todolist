import React from "react";
import TodoListItem from "./TodoListItem";
import "../styles/TodoList.scss";

const TodoList = ({ todos, onToggle, onRemove, onInsertToggle, setSelectedTodo }) => {
  return (
    <ul className="TodoList">
      {todos.map((todo, index) => {
        return (
          <TodoListItem todo={todo} 
        key={index} 
        onToggle={onToggle} 
        onRemove={onRemove}
        onInsertToggle= {onInsertToggle}
        setSelectedTodo = {setSelectedTodo}
        
        />
        );
        })}
    </ul>
  );
};

export default TodoList;