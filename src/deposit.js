import UserContext from "./context";
import { useContext, useState } from "react";
import { Button } from "react-bootstrap";


export default function Deposit(){


    let users=useContext(UserContext)
    
    let n=users.users.length
    let [balance,setBalance]=useState(users.users[n-1].amount)
    let [dep,setDep]=useState(0)
    function handleSubmit(e){
        e.preventDefault()
        let deposit=Number(dep)
        setBalance(balance+deposit)
       
    }
              users.users[n-1].amount=balance
    return(<>

<h1>Deposit</h1>
<form onSubmit={handleSubmit}>
<input type="Number" onChange={(e)=>setDep(e.target.value)} id="fullName"></input>
<Button type="submit">Submit</Button>
</form>
<h2>Balance: {balance} </h2>
        </>)
}


