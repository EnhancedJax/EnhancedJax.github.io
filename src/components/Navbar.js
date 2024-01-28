import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { icons } from 'lucide-react';
import { useLocation } from 'react-router-dom'

function NavBar() {
    return (
        <div id="navbar" className="flex h-16 justify-center items-center gap-6 self-stretch border-cborder border-t bg-cbg fixed bottom-0 w-full lg:top-0 lg:border-r lg:border-t-0 lg:w-16 lg:h-full lg:flex-col">
            <Button to="/" icon="Home"></ Button>
            <Button to="/hkunotes" icon="PenLine"></ Button>
            <Button to="/stack" icon="Layers"></ Button>
            <Button to="/work" icon="Command"></ Button>
            <Button to="/about" icon="UserRound"></ Button>
        </div>
    );
}

function Button({ to, icon }) {
    const LucideIcon = icons[icon]
    const activeColor = '#EDEDED'
    const inactiveColor = '#707070'
    const location = useLocation();
    const isActive = location.pathname === to;
    return (
        <Link to={to} className="p-3">
            <LucideIcon size="1.5rem" color={isActive ? activeColor : inactiveColor} />
        </Link>
    );
}

export default NavBar;