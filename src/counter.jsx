import { useState } from "react"

export default function Counter(){

    const [count,setCount] = useState(0);

    let handleAdd = () =>{
        let newCount = count+1;
        setCount(newCount)
    }

    let counterStyle={
        border:'2px solid peru',
        margin:'10px',
       
    }
    return(
        <div style={counterStyle}>
            <h3>Count : {count} </h3>
            <button onClick={handleAdd}>Add</button>
        </div>
    )
}