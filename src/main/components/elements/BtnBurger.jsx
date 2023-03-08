//styles
import "../../../styles/components/elements/burgerMenu.css";

export default function BtnBurger ({event, toggleState}){
    return (
        <button className="btnMenuIcon" onClick={event}>
            <div className="menuIcon" id="menuIcon" >
                <span className={`${toggleState ? "activeTop" : "downTop"}`}></span>
                <span className={`${toggleState ? "activeMid" : "downMid"}`}></span>
                <span className={`${toggleState ? "activeBot" : "downBot"}`}></span>
            </div>
        </button>
    );
}
