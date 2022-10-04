import logo from './logo.svg';
import './App.css';
import {Link} from "react-router-dom"
import Agenda from './components/Agenda';
import Login from "./components/Login"
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Cadastro from './components/Cadastro';
function App() {
  return (
    <div className="App">
      <h1 className='titulo'>Agendamento online</h1>
      
      <Router exact path="/">
        <div className='main'>
        <Routes>
            <Route path="/cadastro" element={<Cadastro/>} />
            <Route path="/agenda" element={<Agenda/>} />
            <Route path="/login" element={<Login/>} />
        
          </Routes>
        </div>
          
      </Router>
    </div>
  );
}

export default App;
