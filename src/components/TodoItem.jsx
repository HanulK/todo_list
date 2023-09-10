import React from "react";
import cn from "classnames";

function TodoItem({todo, onRemove}) {
    const { id, text, checked } = todo;

    return(
        <div className="todo-item">
            <div className={cn('check_circle', {off: checked})}></div>
            <div className="content">{text}</div>
            <div className="remove" onClick={() => onRemove(id)}></div>
        </div>
    );
}

export default TodoItem;