import React, { useEffect, useState } from 'react';
// import Content from './view/Content';
// import Header from './view/Header';

export default function App() {
  const [msg, setMsg] = useState(0);
  const [color, setColor] = useState("#000");
  const onClickEvent = () => setMsg(msg + 1);

  // useEffect(() => {
  //   console.log("렌더링");
  // });

  // useEffect(() => {
  //   console.log("렌더링");
  // }, []);

  useEffect(() => {
    console.log("렌더링");
  }, [msg]);

  return (
    <>
      <button onClick={onClickEvent}>버튼</button>
      <button style={{ color: "red" }} onClick={() => setColor("red")}>red</button>
      <button style={{ color: "#666" }} onClick={() => setColor("#666")}>#666</button>
      <button style={{ color: "#aaa" }} onClick={() => setColor("#aaa")}>#aaa</button>

      <p style={{ color }}>현재 색은 {color}</p>
      <p>{msg}</p>
      {/* <Header />
      <Content content={"안녕하세요"} name="최영준" /> */}
    </>
  );
}