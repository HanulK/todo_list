import React from "react";

function Box(props) {
    return (
        <div className="box">
            {props.name}
        </div>
    );
}

export default Box;