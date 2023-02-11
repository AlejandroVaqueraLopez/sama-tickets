//icons
import { HiMenu } from "react-icons/hi";
import { IconContext } from 'react-icons'

//styles
import "../../styles/components/MenuPanel.css";

export default function MenuPanel() {
    return(
        <div className="menu-panel container-fluid">
            <button className="btn-menu-burger">
                <IconContext.Provider value={{className:"btn-menu-burger-icon"}}>
                    <HiMenu />
                </IconContext.Provider>
            </button>
        </div>
    );
}