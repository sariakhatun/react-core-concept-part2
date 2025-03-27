/**
 * Components
 * JSX
 * Props
 * State
 * Events
 * [Conditional Rendering]
 * 
 */
/***
 * data fetch from server site
 * 1.API : url ("https://jsonplaceholder.typicode.com/users")
 */
fetch("https://jsonplaceholder.typicode.com/users")
.then(res => res.json())
.then(data => console.log(data))
let loadData = async() =>{
    let res = await fetch('https://jsonplaceholder.typicode.com/users')
    let data = res.json();
    return data;
}