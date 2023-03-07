//icons
import { RiSettings3Fill } from "react-icons/ri";
import { MdHomeFilled } from "react-icons/md";
import { BsPersonFill } from "react-icons/bs";
import { RiCpuLine } from "react-icons/ri";
import { AiFillCalendar } from "react-icons/ai";
import { HiChat } from 'react-icons/hi';
import { CgLogIn } from 'react-icons/cg';
import { CgLogOut } from 'react-icons/cg';
import { HiCube } from 'react-icons/hi';

import { IconContext } from 'react-icons';

//link
import { NavLink } from "react-router-dom";

export default function NavbarListItem({ path, title, icon }) {
    return (
        <li className="ps-5">
            <NavLink className="navbar-settings-container d-flex align-items-center" to={ path }>
                <IconContext.Provider value={{className:"navbar-opc-icon"}}>
                    {
                        icon === "MdHomeFilled" ?  (
                            <MdHomeFilled/>
                        ):(
                            icon === "BsPersonFill" ? (
                                <BsPersonFill/>
                            ):(
                                icon === "RiCpuLine" ? (
                                    <RiCpuLine/>
                                ):(
                                    icon === "AiFillCalendar" ? (
                                        <AiFillCalendar/>
                                    ):(
                                        icon === "RiSettings3Fill" ? (
                                            <RiSettings3Fill/>
                                        ):(
                                            icon === "HiChat" ? (
                                                <HiChat/>
                                            ):(
                                                icon === "CgLogIn" ? (
                                                    <CgLogIn/>
                                                ):(
                                                    icon === "CgLogOut" ? (
                                                        <CgLogOut/>
                                                    ):(
                                                        <HiCube />
                                                    )
                                                )
                                            )
                                        )
                                    )
                                )
                            )
                       )
                    }
                </IconContext.Provider>
                <span className="text-white fs-5">{ title }</span>
            </NavLink>
        </li>
    )
}

