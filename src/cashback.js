import UserContext from "./context";
import { useContext, useState } from "react";
import { Button } from "react-bootstrap";

export default function Cashback(){
    let users=useContext(UserContext)

    let n=users.users.length

    let [balance,setBalance]=useState(users.users[n-1].amount)
    let [cash,setCash]=useState(0)
    function handleSubmit(e){
        e.preventDefault()
        let cashback=Number(cash)
        setBalance(balance-cashback)
    }
    users.users[n-1].amount=balance;


    return(<>

<h1>Cashback</h1>
<form onSubmit={handleSubmit}>
<input type="Number" onChange={(e)=>setCash(e.target.value)} id="fullName"></input>
<Button type="submit">Submit</Button>
</form>
<h2>Balance: {balance} </h2>
        </>)
}