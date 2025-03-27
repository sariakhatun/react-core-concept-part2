import {use} from "react"
import Freind from "./friend"
export default function Friends({friendPromise}){
    let friends = use(friendPromise)
    console.log(friends)
    return (
        <div className="card">
            <h3>Friends : {friends.length} </h3>
            {
                friends.map(friend => <Freind key={friend.key} friend={friend}></Freind>)
            }
        </div>
    )
}