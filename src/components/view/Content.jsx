import React from 'react'

export default function Content(props) {
  let num = 18;
  
  function func() {
    return "안녕";
  }

  const arr = [1, 2, 3, 4, 5, 6];

  return (
    <>
      <div>{props.content}</div>
      <div>{props.name}</div>
      <div>{num}살</div>
      <div>선배 나이 : {num + 1}</div>
      <div>{func()}</div>
      {
        arr.map(item => {
          return <div>{item}</div>
        })
      }
    </>
  )
}