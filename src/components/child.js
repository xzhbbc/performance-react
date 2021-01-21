import React from "react";

function Child(props) {

    console.log('子组件执行')
    return (
        <div onClick={props.onClick}>
            我是{props.name}
        </div>
    )
}

export default React.memo(Child);
