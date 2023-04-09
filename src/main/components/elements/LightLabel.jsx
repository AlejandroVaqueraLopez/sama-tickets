//styles
import "../../../styles/components/elements/LightLabel.css";

export default function LightLabel({ data, style }) {
    return (
        <span className="fs-5 text-white light-label" style={ style }>
            { data }
        </span>
    );
}