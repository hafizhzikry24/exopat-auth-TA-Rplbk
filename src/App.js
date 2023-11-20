import { Route, Routes, Navigate } from "react-router-dom";
import React, { useState } from 'react'
import './App.css';
import './About/About';

import Home from "./Home/Home";
import About from "./About/About";
import Main from "./Main/Main";
import Details from "./Details/Details";
import Search from "./Search/Search";
import DetailSearch from "./DetailSearch/DetailSearch";
import Token from "./auth/Token";
import Login from "./Login/Login";




function App() {

  const tokenLogin = new Token();

const [token, setToken] = useState(tokenLogin.getToken());

function GuardedRoute({Component}) {
  const isUserLogin = token !== null;

  return (
      isUserLogin ? <Component /> : <Login setToken={setToken} />
  )
}

function LoginRoute({Component}) {
  const isUserLogin = token !== null;

  return (
      isUserLogin ? <Navigate to="/Home" /> : <Component setToken={setToken} />
  )
}

  return (
    <>
      <header>
        <img src="/logo.png" alt="logo"/>
        <p id="titleGroup">Exopet-List</p>
      </header>
      <div className="content">
        <Routes>
          <Route path="/" element={<LoginRoute Component={Login}/>} />
          <Route path="/Home" element={<GuardedRoute Component={Home} />}></Route>
          <Route path="/About" element={<GuardedRoute Component={About} />}></Route>
          <Route path="/Main" element={<GuardedRoute Component={Main} />}></Route>
          <Route path="/Search" element={<GuardedRoute Component={Search} />}></Route>
          <Route path="/Cardsdetails/:id" element={<GuardedRoute Component={Details} />}></Route>
          <Route path="/DetailSearch/:name" element={<GuardedRoute Component={DetailSearch} />}></Route>
        </Routes>
      </div>
      
    
  </>
  );
}

export default App;
