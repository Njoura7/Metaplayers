import React from "react";
import logo from "../assets/logo.png"

function Navbar() {


  return (
   
      <nav className="logo">
         
            <img src={logo} alt="" />
       <h1>METAPLAYERS</h1>
      </nav>
   
    
  );
}

export default Navbar;