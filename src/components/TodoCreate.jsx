import React, {useCallback, useState} from "react";

function TodoCreate({onInsert}) {
    const [todo, setTodo] = useState('');

    const onChange = useCallback(e => {setTodo(e.target.value);},[])
    
    const onSubmit = useCallback(e=>{
        onInsert(todo);
        setTodo('');
        e.preventDefault();
    }, [onInsert, todo]);

    return (
        <form className="TodoCreate" onSubmit={onSubmit}>
        <input type="text" value={todo} className="input" onChange={onChange}/>
        <button className="btn" type="submit">+</button>
        </form>
    );
}

export default TodoCreate;