import React, {useState} from "react";
import TodoItem from "./TodoItem";

function TodoBoard({todoList, onRemove, onToggle}) {
    return (
        <div>
            <h1>Todo List</h1>
            {todoList.map((todo) => 
            <TodoItem key={todo.id} todo={todo} onRemove={onRemove} onToggle={onToggle}/>
            )}
        </div>
    );
}

export default TodoBoard;