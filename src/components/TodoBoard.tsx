import React, {useState} from "react";
import { item } from "../interface/todoInterface";
import { TodoItem } from "./TodoItem";

export const TodoBoard = ({todoList, onRemove, onToggle, onInsertToggle, onChangeSelectTodo}: {
    todoList: item[],
    onRemove: Function,
    onToggle: Function,
    onInsertToggle: Function,
    onChangeSelectTodo: Function
}) => {
    return (
        <div>
            <div style={{paddingLeft: '20px'}}><h1>Todo List</h1></div>
            {todoList.map((todo: item) => 
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