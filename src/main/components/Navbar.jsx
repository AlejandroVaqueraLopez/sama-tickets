//hooks
import { NavLink } from "react-router-dom";
import { useState } from "react";

//icons
import { FaUserCircle } from "react-icons/fa";
import { RiSettings3Fill } from "react-icons/ri";
import { MdHomeFilled } from "react-icons/md";
import { BsPersonFill} from "react-icons/bs";
import { RiCpuLine } from "react-icons/ri";
import { AiFillCalendar } from "react-icons/ai";
import { HiChat} from 'react-icons/hi';
import { IconContext } from 'react-icons';

import "../../styles/components/Navbar.css"

export default function Navbar() {
    return (

        <div className="navbar-container-content position-relative">
            <nav className="nav-component d-flex position-absolute py-5">
                <ul className="nav-component-list px-0">

                    <li className="mb-3">
                        <a className="user-data-container d-flex flex-column align-items-start ps-5">
                            <IconContext.Provider value={{className:"user-circle"}}>
                                <FaUserCircle />
                            </IconContext.Provider>
                            <span className="user-email text-white fs-5">alejandrovaqueralopez@gmail.com</span>
                        </a>
                    </li>

                    <li>
                        <hr/>
                    </li>

                    <li className="ps-5">
                        <a className="navbar-settings-container d-flex align-items-center" href="/">
                            <IconContext.Provider value={{className:"navbar-opc-icon"}}>
                                <MdHomeFilled />
                            </IconContext.Provider>
                            <span className="text-white fs-5">Dashboard</span>
                        </a>
                    </li>

                    <li className="ps-5">
                        <a className="navbar-settings-container d-flex align-items-center">
                            <IconContext.Provider value={{className:"navbar-opc-icon"}}>
                                <BsPersonFill/>
                            </IconContext.Provider>
                            <span className="text-white fs-5">Clientes</span>
                        </a>
                    </li>

                    <li className="ps-5">
                        <a className="navbar-settings-container d-flex align-items-center">
                            <IconContext.Provider value={{className:"navbar-opc-icon"}}>
                                <RiCpuLine/>
                            </IconContext.Provider>
                            <span className="text-white fs-5">Ordenes</span>
                        </a>
                    </li>

                    <li className="ps-5">
                        <a className="navbar-settings-container d-flex align-items-center">
                            <IconContext.Provider value={{className:"navbar-opc-icon"}}>
                                <AiFillCalendar/>
                            </IconContext.Provider>
                            <span className="text-white fs-5">Calendario</span>
                        </a>
                    </li>

                    <li>
                        <hr/>
                    </li>

                    <li className="ps-5">
                        <a className="navbar-settings-container d-flex align-items-center">
                            <IconContext.Provider value={{className:"navbar-opc-icon"}}>
                                <RiSettings3Fill />
                            </IconContext.Provider>
                            <span className="text-white fs-5">Config</span>
                        </a>
                    </li>

                    <li className="ps-5">
                        <a className="navbar-settings-container d-flex align-items-center">
                            <IconContext.Provider value={{className:"navbar-opc-icon"}}>
                                <HiChat/>
                            </IconContext.Provider>
                            <span className="text-white fs-5">Chat</span>
                        </a>
                    </li>

                    <li className="ps-5">
                        <NavLink to="signin">Sign In</NavLink>
                    </li>
                    <li className="ps-5">
                        <NavLink to="/signup">Sign Up</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

