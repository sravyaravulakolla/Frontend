import React from "react";
function Navbar(){
    return(
        <>
        <h1>My website</h1>
        <nav>
            <ul>
            <li><a href='/'>Home</a></li>
            <li><a href='/about'>About Us</a></li>
            <li><a href='/contact'>Contact Us</a></li>
            </ul>
        </nav>
        </>
    );
}
export default Navbar;