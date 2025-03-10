import UserContext from "./context";
import { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import "./cashback.css"; // Import the new CSS file

export default function Cashback() {
  let users = useContext(UserContext);
  let n = users.users.length;

  let [balance, setBalance] = useState(users.users[n - 1].amount);
  let [cash, setCash] = useState("");
  let [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    let cashback = Number(cash);

    // Validation: Prevent negative cashback or non-numeric input
    if (isNaN(cashback) || cashback <= 0) {
      setError("Please enter a valid positive cashback amount!");
      return;
    }
    if (cashback > balance) {
      setError("Insufficient balance!");
      return;
    }

    setBalance(balance - cashback);
    setError(""); // Clear errors if valid input
    users.users[n - 1].amount = balance - cashback;
  }

  return (
    <div className="cashback-container">
      <h1 className="cashback-title">CASHBACK</h1>
      <form onSubmit={handleSubmit} className="cashback-form">
        <input
          type="number"
          onChange={(e) => setCash(e.target.value)}
          placeholder="Enter Cashback Amount"
          className={`cashback-input ${error ? "error-input" : ""}`}
        />
        {error && <p className="error-text">{error}</p>}
        <Button type="submit" className="cashback-button">
          Submit
        </Button>
      </form>
      <h2 className="balance-text">Balance: ₹{balance}</h2>
    </div>
  );
}
