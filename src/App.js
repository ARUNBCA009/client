import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Register from './register';
import Deposit from './deposit';
import Cashback from './cashback';
import AllData from './alldata';
import UserContext from './context';

function App() {
  return (
    <>
      <Navbar style={{ backgroundColor: "black", padding: "15px" }} variant="dark">
        <Container>
          {/* <Navbar.Brand href="#NAV" style={{ fontSize: "22px", fontWeight: "bold", color: "#ffcc00" }}>
          </Navbar.Brand> */}
          <Nav className="me-auto">
            <Nav.Link href="#Home" style={{ fontSize: "18px", color: "#ffffff" }}>ARM BANK</Nav.Link>
            <Nav.Link href="#Register" style={{ fontSize: "18px", color: "#ffffff" }}>REGISTER</Nav.Link>
            <Nav.Link href="#Deposit" style={{ fontSize: "18px", color: "#ffffff" }}>DEPOSIT</Nav.Link>
            <Nav.Link href="#Cashback" style={{ fontSize: "18px", color: "#ffffff" }}>CASHBACK</Nav.Link>
            <Nav.Link href="#AllData" style={{ fontSize: "18px", color: "#ffffff" }}>ALL-DATA</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <HashRouter>
        <UserContext.Provider value={{
          "users": [{
            name: "ARUN R",
            email: "arunarunbcayear@gmail.com",
            password: 123456888889,
            amount: 1000
          }]
        }}>
          <Routes>
            <Route path='/register' element={<Register />} />
            <Route path='/deposit' element={<Deposit />} />
            <Route path='/cashback' element={<Cashback />} />
            <Route path='/alldata' element={<AllData />} />
          </Routes>
        </UserContext.Provider>
      </HashRouter>
    </>
  );
}

export default App;
