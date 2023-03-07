//components
import Navbar from "./Navbar";

//icons
import { HiMenu } from "react-icons/hi";
import { IconContext } from 'react-icons';

//hooks
import { useState } from "react";

//styles
import "../../styles/components/MenuPanel.css";

export default function MenuPanel() {
    const [navbarToggle, setNavbarToggle] = useState(false);

    const navbarClick = () => {
        setNavbarToggle(!navbarToggle);
    }

    return(
        <>
            <div className="menu-panel container-fluid">
                <button className="btn-menu-burger" onClick={navbarClick}>
                    <IconContext.Provider value={{className:"btn-menu-burger-icon"}}>
                        <HiMenu />
                    </IconContext.Provider>
                </button>
            </div>
            {
                navbarToggle 
                ? ( 
                    <Navbar /> 
                ): (
                    null 
                )
            }
        </>
    );
}