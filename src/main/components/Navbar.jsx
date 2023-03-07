//hooks
import { NavLink } from "react-router-dom";

//styles
import "../../styles/components/Navbar.css"

//elements
import NavbarListItem from "./elements/NavbarListItem";

//icons
import { FaUserCircle } from "react-icons/fa";
import { IconContext } from 'react-icons';

export default function Navbar() {


    return (

        <div className="navbar-container-content position-relative">
            <nav className="nav-component d-flex position-absolute py-5">
                <ul className="nav-component-list px-0">

                    <li className="mb-3">
                        <NavLink className="user-data-container d-flex flex-column align-items-start ps-5" to="/user">
                            <IconContext.Provider value={{className:"user-circle"}}>
                                <FaUserCircle />
                            </IconContext.Provider>
                            <span className="user-email text-white fs-5">alejandrovaqueralopez@gmail.com</span>
                        </NavLink>
                    </li>
                    <li>
                        <hr/>
                    </li>
                    <NavbarListItem path="/" title="Dashboard" icon="MdHomeFilled"/>
                    <NavbarListItem path="/customer" title="Clientes" icon="BsPersonFill"/>
                    <NavbarListItem path="/order" title="Ordenes" icon="RiCpuLine"/>
                    <NavbarListItem path="/calendar" title="Calendario" icon="AiFillCalendar"/>
                    <li>
                        <hr/>
                    </li>
                    <NavbarListItem path="/config" title="Config" icon="RiSettings3Fill"/>
                    <NavbarListItem path="/chat" title="Chat" icon="HiChat"/>
                    <li>
                        <hr/>
                    </li>
                    <NavbarListItem path="/login" title="LogIn" icon="CgLogIn"/>
                    <NavbarListItem path="/logout" title="LogOut" icon="CgLogOut"/>

                </ul>
            </nav>
        </div>
    );
}

