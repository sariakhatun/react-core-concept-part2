import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter'
import Batsman from './player'

function App() {
  function handleClick(){
    alert("I am clicked")
  }
  let handleClick3 = () =>{
    alert("Clicked 3")
  }
  let handleClick5 = (num) =>{
    let newNum = num+5
    alert(newNum)
  }
  return (
    <>
      
      <h1>Vite + React</h1>
    <Batsman></Batsman>
    <Counter></Counter>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={function handleClick2(){
        alert("Clicked 2")
      }}>Click Me2</button>
      <button onClick={handleClick3}>Clicked Me 3</button>
      <button onClick={ () =>{
        alert("clicked 4")
      }}>Clicked Me 4</button>
      <button onClick={()=>handleClick5(7)}>click Me 5</button>
    </>
  )
}

export default App
