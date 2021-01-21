import React from "react";

function ChildNoStatus() {

    console.log('无状态子组件执行')
    return (
        <div>
            我是无状态组件
        </div>
    )
}

export default React.memo(ChildNoStatus);
