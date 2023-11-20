import React from "react";
import { NavLink } from "react-router-dom";
import Token from "../auth/Token";
import { Button } from "@mui/material";
import { AiOutlineHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { AiOutlineBook } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";


const Navbar = () => {

  const auth = new Token();
  function handleLogout (e){
    e.preventDefault();
    const isLogout = window.confirm('yakin untuk keluar? ');

    if (isLogout ){
        auth.removeToken();
        window.location.reload();
    }
}

  return (
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
        <Button onClick = {handleLogout}  size="large">Logout</Button>
    </footer>
  );
};

export default Navbar;
