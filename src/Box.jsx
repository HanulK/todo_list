import React from "react";

function Box(props) {
    const clickMe = () => {
        alert(props.num + '번째 박스입니다!');
    }

    return (
        <div className="box">
            Box {props.num} <br/>
            {props.name} <br/>
            <button onClick={clickMe}>click!</button>
        </div>
    );
}

export default Box;