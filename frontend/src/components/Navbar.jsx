import React from "react";
import { NavLink, Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className='absolute top-0 left-0 z-100 w-full bg-transparent'>

      <ul className="flex gap-5 justify-center mt-5 text-sm text-white">
        <NavLink to="/home"  style={({ isActive }) => ({
            textDecoration: isActive ? "underline" : "none",
            textUnderlineOffset: "4px",
          })}>
          <p>Home</p>
    
         </NavLink>

        <NavLink to="/menu" style={({isActive})=> ({
            textDecoration: isActive ? "underline" : "none",
            textUnderlineOffset: "4px",
        })}>
          <p>Menu</p>
        </NavLink>

        <NavLink to="/about" style={({isActive})=> ({
            textDecoration: isActive ? "underline" : "none",
            textUnderlineOffset: "4px",
        })}>
          <p>About</p>
        </NavLink>

        <NavLink to="/contact" style={({isActive})=> ({
            textDecoration : isActive ? "underline" : "none",
            textUnderlineOffset:"4px"
        })}>
          <p>Contact</p>
        </NavLink>


      </ul>
    </div>
  );
};
