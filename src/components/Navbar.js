import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

function NavBar() {
    return (
        <nav class="navbar">
            <ul>
                <li><Link class="navbar_button" to="/#home">home.</Link></li>
                <li><Link class="navbar_button" to="/hkunotes">notes.</Link></li>
                <li><Link class="navbar_button" to="/#work">work.</Link></li>
                <li><Link class="navbar_button" to="https://github.com/EnhancedJax">github.</Link></li>
            </ul>
        </nav>
    );
}

export default NavBar;