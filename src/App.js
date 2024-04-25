import logo from './logo.svg';
import './App.css';
import { addCalcados, getCalcados } from './firebase/firebase';
import { useEffect } from 'react';
import Login from './Login';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Calcados from './Calcados';
import Cadastro from './Cadastro';

function App() {
    useEffect(() => {
        getCalcados()
    

    }, [])
    

  return (
    <div className="App">
 <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Calcados" element={<Calcados />} />
        <Route path="/Cadastro" element={<Cadastro />} />
        

      </Routes>
    </Router>
    </div>
  );

}

export default App;
