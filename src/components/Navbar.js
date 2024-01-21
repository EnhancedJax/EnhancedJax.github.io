import React from 'react';

function NavBar() {
    return (
        <nav class="navbar">
            <ul>
                <li><a href="/#home">home</a></li>
                <li><a href="/hkunotes">study notes</a></li>
                <li><a href="/#skills">skills</a></li>
                <li><a href="/#work">work</a></li>
                <li><a href="https://github.com/EnhancedJax">github</a></li>
            </ul>
        </nav>
    );
}

export default NavBar;