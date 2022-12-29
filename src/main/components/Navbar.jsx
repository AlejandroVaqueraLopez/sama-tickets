import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="signin">Sign In</NavLink>
                </li>
                <li>
                    <NavLink to="/signup">Sign Up</NavLink>
                </li>
            </ul>
        </nav>
    );
}

