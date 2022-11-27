import { Route, Routes, NavLink, Navigate } from "react-router-dom";
import React from 'react';
import './App.css';
import './About/About';
import './Profile/Profile';
import { AiOutlineHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { AiOutlineBook } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import Home from "./Home/Home";
import About from "./About/About";
import Main from "./Main/Main";
import Details from "./Details/Details";
import Search from "./Search/Search";
import DetailSearch from "./DetailSearch/DetailSearch";
function App() {
  return (
    <>
      <header>
        <img src="/logo.png" alt="logo"/>
        <p id="titleGroup">Exopet-List</p>
      </header>
      <div className="content">
        <Routes>
          <Route path="/" element={<Navigate replace to="/Home" />} />
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Main" element={<Main />}></Route>
          <Route path="/Search" element={<Search />}></Route>
          <Route path="/Cardsdetails/:id" element={<Details/>}></Route>
          <Route path="/DetailSearch/:name" element={<DetailSearch/>}></Route>
        </Routes>
      </div>
      <footer>
        <NavLink to="/Home" className="iconWrapper">
          <AiOutlineHome className="icon" />
          Home
        </NavLink>
        <NavLink to="/Main" className="iconWrapper">
          <AiOutlineBook className="icon" />
          Exopet Information
        </NavLink>
        <NavLink to="/Search" className="iconWrapper">
          <BsSearch className="icon" />
          Search
        </NavLink>
        <NavLink to="/About" className="iconWrapper">
          <CgProfile className="icon" />
          About
        </NavLink>
      </footer>
  </>
  );
}

export default App;
