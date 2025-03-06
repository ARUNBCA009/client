import { Table } from "react-bootstrap";
// import UserContext from "./Context"; 
// import { useContext } from "react";
import {useState, useEffect} from "react";
import axios from 'axios';
export default function Alldata(){
// let users=useContext(UserContext)
// console.log("hi",users.users[0].amount);

let [data,setData]=useState([])
async function handleClick(e){
  e.preventDefault();
  let result =await(axios.get('https://server-1-viv0.onrender.com/data'));
  setData(result.data)
}
async function handleDelete(id){
  let result =await(axios.delete(`https://server-1-viv0.onrender.com/${id}`));
  setData(data.filter((item) =>item._id !== id));
}

return(
<>
<h1>ALL-DATA</h1>
<table class="table">
      <thead>
        <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
            <th scope="col">Balance</th>
            <th scope="col">Delete</th>


        </tr>
      </thead>
      <tbody>
            {data.map((item)=><tr>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.password}</td>
                <td>{item.amount}</td>
                <td><button onClick={() => handleDelete(item._id)}>Delete</button></td>
                <td>
              </td>

            </tr>)}    
      </tbody>
    </table>
    <button onClick={handleClick}>FETCH</button>
</>)
}


