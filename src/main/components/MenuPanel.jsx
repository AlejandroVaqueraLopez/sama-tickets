//components
import Navbar from "./Navbar";

//hooks
import { useState } from "react";

//styles
import "../../styles/components/MenuPanel.css";

//elements
import BtnBurger from "./elements/BtnBurger";

export default function MenuPanel() {
    const [navbarToggle, setNavbarToggle] = useState(false);

    const navbarClick = () => {
        setNavbarToggle(!navbarToggle);
    }

    return(
        <>
            <div className="menu-panel container-fluid">
                <BtnBurger event={navbarClick} toggleState={navbarToggle}/>
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
    /**
     * 
     * 
                <button className="btn-menu-burger" onClick={navbarClick}>
                    <IconContext.Provider value={{className:"btn-menu-burger-icon"}}>
                        <HiMenu />
                    </IconContext.Provider>
                </button>
     * 
     */
}