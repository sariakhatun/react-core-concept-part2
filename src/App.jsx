import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter'
import Batsman from './player'
import Users from './user'
import Friends from './friends'
import Posts from './post'

let fetchUser = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())
let fetchFriends = async() =>{
  let res = await fetch('https://jsonplaceholder.typicode.com/users')
  return res.json();

}
let fetchPost = fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json())
function App() {

  let friendPromise = fetchFriends()

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
      <Suspense fallback={<h3>Post are coming</h3>}>
        <Posts fetchPost={fetchPost}></Posts>
      </Suspense>
      {/* <Suspense fallback={<h3>Loading...</h3>}>
      <Users fetchUser={fetchUser}></Users>
      </Suspense> */}
      {/* <Suspense fallback={<h3>Friends are coming for treat....</h3>}>
    <Friends friendPromise = {friendPromise}></Friends>
      </Suspense> */}
     
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
