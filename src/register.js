import { useState } from "react";
import { Button } from "react-bootstrap";
import axios from 'axios';
import './App.css';
import './Register.css'; // New CSS file for styling

export default function Register() {
    let [name, setName] = useState('');
    let [email, setEmail] = useState('');
    let [pass, setPass] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();
        console.log(name, email, pass);
        
        let item = { name, email, password: pass, amount: 1000 };

        try {
            await axios.post('https://server-1-viv0.onrender.com/create', item);
            alert("Registration Successful!");
        } catch (error) {
            console.error("Error registering user:", error);
            alert("Registration Failed!");
        }
    }

    return (
        <div className="register-container">
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Full Name</label>
                    <input type="text" onChange={(e) => setName(e.target.value)} className="form-control" required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email Address</label>
                    <input type="email" onChange={(e) => setEmail(e.target.value)} className="form-control" required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" onChange={(e) => setPass(e.target.value)} className="form-control" required />
                </div>
                <Button type="submit" className="btn btn-primary">Register</Button>
            </form>
        </div>
    );
}
