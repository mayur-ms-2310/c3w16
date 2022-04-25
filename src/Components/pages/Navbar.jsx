import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../context/AuthContext";



export const Navbar = () => {
  const { token } = useContext(AuthContext);
  // use token to chnage the text from Login to Logout once logged in successfully
 
  return (
    <>
      <nav style={{height:"60px",
       background : "pink",
        display:"flex" ,
         gap:"30px" ,
         justifyContent:"center",
          fontSize:"20px",
          fontWeight:"bold"}}>
        {/* keep all the NavLinks here */}
        <Link to="/">Home</Link>
        <Link to="about">About</Link>
        <Link to="books">Books</Link>
        {token ?  <Link to="logout">Logout</Link> :<Link to="login">Login</Link> 
           }
        
      </nav>
    </>
  );
};
