export default function BtnGeneral({style, text, event, link}) {
    return (
        <button className="style" style={style} onClick={event} href={link}>{ text }</button>
    );
}