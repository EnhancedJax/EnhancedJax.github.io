import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

function NavBar() {
    return (
        <ul class="navbar">
            <li><Link class="button" to="/#home">home.</Link></li>
            <li><Link class="button" to="/hkunotes">notes.</Link></li>
            <li><Link class="button" to="/#work">work.</Link></li>
            <li><Link class="button" to="/#contact">contact.</Link></li>
            <li><Link class="button" to="https://github.com/EnhancedJax">github.</Link></li>
        </ul>
    );
}

export default NavBar;