import { NavLink } from "react-router-dom";
import { useState } from "react";

import "../../styles/components/Navbar.css"

export default function Navbar() {
    return (

        <div className="navbar-container-content position-relative">
            <nav className="nav-component d-flex position-absolute">
                <ul>
                    <li>
                        <NavLink to="signin">Sign In</NavLink>
                    </li>
                    <li>
                        <NavLink to="/signup">Sign Up</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

