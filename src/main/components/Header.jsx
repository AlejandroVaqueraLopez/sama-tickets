//components
import MenuPanel from "./MenuPanel";

//styles
import "../../styles/components/Header.css";

export default function Header() {
    return (
        <header className="header-container position-fixed px-0 mx-0">
            <MenuPanel/>
        </header>
    );
}