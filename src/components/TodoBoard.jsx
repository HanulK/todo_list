import React, {useState} from "react";
import TodoItem from "./TodoItem";

function TodoBoard({todoList, onRemove, onToggle, onInsertToggle, onChangeSelectTodo}) {
    return (
        <div>
            <div style={{paddingLeft: '20px'}}><h1>Todo List</h1></div>
            {todoList.map((todo) => 
                <TodoItem 
                    key={todo.id}
                    todo={todo}
                    onRemove={onRemove}
                    onToggle={onToggle}
                    onInsertToggle={onInsertToggle}
                    onChangeSelectTodo={onChangeSelectTodo}
                />
            )}
        </div>
    );
}

export default TodoBoard;