import React, { useState, useRef, useCallback } from "react";
import TodoCreate from "./components/TodoCreate";
import './App.css';
import TodoBoard from "./components/TodoBoard";
import TodoEdit from "./components/TodoEdit";

function App() {
    // 기본값 설정
    // const [todos, setTodos] = useState([]);
    const [todos, setTodos] = useState([
        {
            id: 1,
            text: '투두리스트 만들기',
            checked: true,
        },
    ]);

    // TodoCreate 안의 onSubmit 함수 안에서 재사용
    // todos 값 추가
    const nextId = useRef(2);
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

    // TodoItem 안의 checkRM 함수(id 값으로 선택된 item 제거) 안에서 재사용
    const onRemove = useCallback(
        (id) => {
            setTodos(todos.filter((todo) => todo.id !== id));
        },
        [todos]
    );

    // TodoItem 안의 check_circle 클래스 선택 시 todos의 특정 id값을 가지는 item의 checked를 변경
    const onToggle = useCallback(
        (id) => {
            setTodos(
                todos.map((todo) => 
                todo.id === id ? {...todo, checked: !todo.checked} : todo)
            )
        },
        [todos]
    );

    const [insertToggle, setInsertToggle] = useState(false);
    // 선택한 특정 항목의 todo 객체를 담아오는 state
    const [selectTodo, setSelectTodo] = useState(null);
    // 수정 팝업 토글 변경
    const onInsertToggle = () => {
        // 이전값 reset
        if (selectTodo) {
            setSelectTodo(null);
        }

        // insertToggle 값 바꾸기 (ture <-> false)
        setInsertToggle((prev) => !prev);
    }
    // TodoItem 안의 edit 클래스 선택시 insertToggle값을 true(popup 띄우기)로 변경
    const onChangeSelectTodo = (todo) => {
        setSelectTodo(todo);
    }

    // TodoEdit의 onSubmit을 통해 todo item의 text 업데이트
    const onUpdate = useCallback((id, text) => {
        // 수정 완료임으로 popup 닫기
        onInsertToggle();
        // id가 같을 때 text 업데이트 다르면 그대로 유지
        setTodos(
            todos.map((todo) => 
            todo.id === id ? {...todo, text : text} : todo
        ));
    },
    [todos])


    return (
        <div>
            <TodoBoard 
                todoList={todos}
                onRemove={onRemove}
                onToggle={onToggle}
                onInsertToggle={onInsertToggle}
                onChangeSelectTodo={onChangeSelectTodo}
            />
            {/* insertToggle이 true라면 ()안의 component 호출 */}
            {insertToggle && (
                <TodoEdit 
                    onInsertToggle={onInsertToggle}
                    selectTodo={selectTodo}
                    onUpdate={onUpdate}
                />
            )}
            <TodoCreate onInsert={onInsert}/>
        </div>
    );
}

export default App;