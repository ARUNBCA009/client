import UserContext from "./context";
import { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import "./deposit.css"; // Import the CSS file for styling

export default function Deposit() {
  let users = useContext(UserContext);
  let n = users.users.length;
  let [balance, setBalance] = useState(users.users[n - 1].amount);
  let [dep, setDep] = useState("");
  let [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    let deposit = Number(dep);

    // Validation for deposit amount
    if (isNaN(deposit) || deposit <= 0) {
      setError("Please enter a valid positive number!");
      return;
    }

    setBalance(balance + deposit);
    setError(""); // Clear error if valid deposit
    users.users[n - 1].amount = balance + deposit;
  }

  return (
    <div className="deposit-container">
      <h1>DEPOSIT</h1>
      <form onSubmit={handleSubmit} className="deposit-form">
        <input
          type="number"
          onChange={(e) => setDep(e.target.value)}
          placeholder="Enter Deposit Amount"
          className={`deposit-input ${error ? "error-input" : ""}`}
        />
        {error && <p className="error-text">{error}</p>}
        <Button type="submit" className="deposit-button">
          Submit
        </Button>
      </form>
      <h2>Balance: ₹{balance}</h2>
    </div>
  );
}
