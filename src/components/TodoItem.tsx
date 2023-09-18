import React from "react";
import cn from "classnames";
import { item } from "../interface/todoInterface";

export const TodoItem = ({todo, onRemove, onToggle, onInsertToggle, onChangeSelectTodo}: {
    todo: item,
    onRemove: Function,
    onToggle: Function,
    onInsertToggle: Function,
    onChangeSelectTodo: Function
}) => {
    const { id, text, checked } = todo;

    const checkRM = (id: number) => {
        if(window.confirm('삭제 하시겠습니까?')){
            onRemove(id)
        }
    }

    return(
        <div className="todo-item">
            <div className={cn('check_circle', {off: checked})} onClick={() => onToggle(id)}></div>
            <div className={cn('content', {off: checked})}>{text}</div>
            <div className="edit" onClick={() => {
                onChangeSelectTodo(todo);
                onInsertToggle();
            }}></div>
            <div className="remove" onClick={() => checkRM(id)}></div>
        </div>
    );
}