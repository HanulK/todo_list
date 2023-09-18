import React, {useCallback, useEffect, useState} from "react";
import { item } from "../interface/todoInterface";

export const TodoEdit = ({onInsertToggle, selectTodo, onUpdate}: {
                            onInsertToggle: Function,
                            selectTodo: item,
                            onUpdate: Function}) => 
{
    const [text, setText] = useState<string>('');

    const onSubmit = useCallback<(e: React.FormEvent) => void>( e => {
        onUpdate(selectTodo.id, text);
        setText('');
        e.preventDefault();
    }, [onUpdate, text]);

    // useEffect : 2번째 인자에 해당하는 state(selectTodo)가 변할 때만 실행됨
    // API 통신도 주로 useEffect로 함
    useEffect(() => {
        // 선택된 todo값이 존재하면
        if(selectTodo) {
            // selectTodo : { id, text, checked }
            setText(selectTodo.text);
        }
    }, [selectTodo]);

    return(
        <div className="popup">
            <form className="edit_input" onSubmit={onSubmit}>
                <div className="edit_area">
                    <input className="edit_text" value={text} placeholder="수정 사항을 입력하세요." onChange={(e) => {setText(e.target.value)}}></input>
                    <button type="submit" className="btn">수정</button>
                </div>
                <button type="button" className="close_popup" onClick={() => onInsertToggle()}>닫기</button>
            </form>
        </div>
    );
}