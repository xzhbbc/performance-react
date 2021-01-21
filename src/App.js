import {useCallback, useEffect, useState} from "react";
import Child from "./components/child";
import ChildNoStatus from "./components/childNoStatus";

function App() {
  const [title, setTitle] = useState('');
  const [subTitle, setSub] = useState('');

  const childCallBack = useCallback(() => {
    setSub('这是副标题')
  }, [])

  return (
      <>
        <div>这里有个title: {title}</div>
        <div>这里有个subTitle: {subTitle}</div>
        <div>
          <button onClick={() => {
            setTitle('这是个标题')
          }}>触发标题修改</button>
          <button onClick={() => {
            setTitle('')
            setSub('')
          }}>清空标题</button>
        </div>
        <Child onClick={childCallBack} name="子组件"/>
        <ChildNoStatus/>
      </>
  )
}

export default App;
