import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

function NavBar() {
    return (
        <div id="navbar" className="p-4 gap-4 fixed flex justify-end items-center w-full z-50">
            <Button to="/#home">home.</ Button>
            <Button to="/hkunotes">notes.</ Button>
            <Button to="/#work">work.</ Button>
            <Button to="/#contact">contact.</ Button>
            <Button to="https://github.com/EnhancedJax">github.</ Button>
        </div>
    );
}

function Button({ to, children }) {
    return (
        <Link to={to} className="rounded-lg py-[0.125rem] px-4 cursor-pointer bg-white shadow-[inset_0_0_0_0_transparent,0_0px_6px_-4px_rgba(150,150,150,0.4)] border font-extralight border-neutral-100 hover:border-black hover:shadow-[inset_0_-2rem_1px_0_#000,0_0px_6px_-4px_rgba(150,150,150,0.4)] hover:text-neutral-100 transition ease-out duration-200">
            {children}
            {/* FIXME:  */}
        </Link>
    );
}

export default NavBar;