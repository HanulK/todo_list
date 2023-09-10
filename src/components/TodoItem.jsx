import React from "react";
import cn from "classnames";

function TodoItem({todo, onRemove, onToggle}) {
    const { id, text, checked } = todo;

    return(
        <div className="todo-item">
            <div className={cn('check_circle', {off: checked})} onClick={() => onToggle(id)}></div>
            <div className={cn('content', {off: checked})}>{text}</div>
            <div className="remove" onClick={() => onRemove(id)}></div>
        </div>
    );
}

export default TodoItem;