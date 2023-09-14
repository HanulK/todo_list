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
        <div className="inputArea">
            <form className="TodoCreate" onSubmit={onSubmit}>
                <input type="text" value={todo} className="input" placeholder="할 일을 입력하세요." onChange={onChange}/>
                <button className="btn" type="submit">+</button>
            </form>
        </div>
    );
}

export default TodoCreate;