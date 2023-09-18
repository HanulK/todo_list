import React, { useState, useRef, useCallback } from "react";
import './App.css';
import { item } from "./interface/todoInterface";
import { TodoCreate } from "./components/TodoCreate";
import { TodoEdit } from "./components/TodoEdit";
import { TodoBoard } from "./components/TodoBoard";

function App() {
    const [todos, setTodos] = useState<item[]>([]);

    // TodoCreate 안의 onSubmit 함수 안에서 재사용
    // todos 값 추가
    const nextId = useRef<number>(1);
    const onInsert = useCallback<(text: string) => void>(
        (text: string) => {
            const todo: item = {
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
    const onRemove = useCallback<(id: number) => void>(
        (id) => {
            setTodos(todos.filter((todo: item) => todo.id !== id));
        },
        [todos]
    );

    // TodoItem 안의 check_circle 클래스 선택 시 todos의 특정 id값을 가지는 item의 checked를 변경
    const onToggle = useCallback<(id: number) => void>(
        (id) => {
            setTodos(
                todos.map((todo: item) => 
                todo.id === id ? {...todo, checked: !todo.checked} : todo)
            )
        },
        [todos]
    );

    const [insertToggle, setInsertToggle] = useState<boolean>(false);
    // 선택한 특정 항목의 todo 객체를 담아오는 state
    const [selectTodo, setSelectTodo] = useState<item>(null);
    // 수정 팝업 토글 변경
    const onInsertToggle = () => {
        // 이전값 reset
        if (selectTodo) {
            setSelectTodo(null);
        }

        // insertToggle 값 바꾸기 (ture <-> false)
        setInsertToggle((prev: boolean) => !prev);
    }
    // TodoItem 안의 edit 클래스 선택시 insertToggle값을 true(popup 띄우기)로 변경
    const onChangeSelectTodo = (todo: item) => {
        setSelectTodo(todo);
    }

    // TodoEdit의 onSubmit을 통해 todo item의 text 업데이트
    const onUpdate = useCallback<(id: number, text: string) => void>((id, text) => {
        // 수정 완료임으로 popup 닫기
        onInsertToggle();
        // id가 같을 때 text 업데이트 다르면 그대로 유지
        setTodos(
            todos.map((todo: item) => 
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