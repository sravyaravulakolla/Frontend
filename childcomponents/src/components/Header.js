import React from 'react';
function Header(){
    return(
        <header>
            <h1>My Website</h1>
            <nav>
                <a href='/'>Home</a>
                <a href='/about'>About Us</a>
                <a href='/contact'>Contact Us</a>
            </nav>
        </header>
    );
}
export default Header;