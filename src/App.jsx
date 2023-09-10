import React, { useState, useRef, useCallback } from "react";
import TodoCreate from "./components/TodoCreate";
import './App.css';
import TodoBoard from "./components/TodoBoard";

function App() {
    // 기본값 설정
    // const [todos, setTodos] = useState([]);
    const [todos, setTodos] = useState([
        {
            id: 1,
            text: '리액트 기초 알아보기',
            checked: true,
        },
        {
            id: 2,
            text: '컴포넌트 스타일링 하기',
            checked: true,
        },
        {
            id: 3,
            text: '투두리스트 만들기',
            checked: false,
        },
    ]);

    const nextId = useRef(4);
    const onInsert = useCallback(
        (text) => {
            const todo = {
                id : nextId.current,
                text,
                checked: false
            };
            setTodos(todos.concat(todo));
            nextId.current++;
        },
        [todos]
    );

    const onRemove = useCallback(
        (id) => {
            setTodos(todos.filter((todo) => todo.id !== id));
        },
        [todos]
    );

    return (
        <div>
            <TodoCreate onInsert={onInsert}/>
            <TodoBoard todoList={todos} onRemove={onRemove}/>
        </div>
    );
}

export default App;