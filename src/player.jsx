import { useState } from "react"

export default function Batsman(){
    let [runs,setRuns] = useState(0)
    let [sixes,setSixes] = useState(0)
    let handleSingle = () =>{
       let newRuns = runs+1;
        setRuns(newRuns);
    }
    let handleFour = () =>{
        let newRuns = runs + 4;
        setRuns(newRuns)
    }
    let handleSix = () =>{
        let newRuns = runs + 6;
        let updatedSix = sixes + 1
        setSixes(updatedSix)
        setRuns(newRuns)
    }
        return(
            <div>
                <h3>Player : Bagla Batsman</h3>
                <p><small>number of sixes : {sixes} </small></p>
                {
                    runs>50 && <p>Your score : {runs} </p>
                }
                <h1>Score : {runs} </h1>
                <button onClick={handleSingle}>singles</button>
                <button onClick={handleFour}>Four</button>
                <button onClick={handleSix}>Six</button>
            </div>
        )
}