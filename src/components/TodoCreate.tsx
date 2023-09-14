import React, {useCallback, useState} from "react";

function TodoCreate({onInsert}) {
    const [todo, setTodo] = useState<string>('');

    const onChange = useCallback((e: any) => {setTodo(e.target.value);},[])
    
    // useCallback으로 감싸면 타입 추론이 안됨
    // 해결 방법1 : event object에 직접 typing
    // const onSubmit = useCallback( (e: React.FormEvent<HTMLFormElement>) => {
    //     onInsert(todo);
    //     setTodo('');
    //     e.preventDefault();
    // }, [onInsert, todo]);

    // 해결 방법2 : useCallback의 generic으로 typing
    const onSubmit = useCallback<(e: React.FormEvent) => void>( e => {
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