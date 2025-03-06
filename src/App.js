import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from "react-bootstrap"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { HashRouter,Routes,Route } from 'react-router-dom';
import Register from './register';
import Deposit from './deposit';
import Cashback from './cashback';
import AllData from './alldata';
import UserContext from './context';

function App() {
  return (<>

    <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#NAV">NAV</Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link href="#Home">ICICBANK </Nav.Link>
            <Nav.Link href="#Register">REGISTER</Nav.Link>
            <Nav.Link href="#Deposit">DEPOSIT</Nav.Link>
            <Nav.Link href="#Cashback">CASHBACK</Nav.Link>
            <Nav.Link href="#AllData">ALL-DATA</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <HashRouter> 
        <UserContext.Provider value={{"users":[{
          name:"ARUN R",
          email:"arunarunbcayear@gmail.com",
          password:123456888889,
          amount:1000}
          ]}}>
        <Routes>
          <Route path='/register' element={<Register></Register>}></Route>
          <Route path='/deposit' element={<Deposit></Deposit>}></Route>
          <Route path='/cashback' element={<Cashback></Cashback>}></Route>
          <Route path='/alldata' element={<AllData></AllData>}></Route>
        </Routes>
        </UserContext.Provider> 
         </HashRouter>


</>
  );
}

export default App;