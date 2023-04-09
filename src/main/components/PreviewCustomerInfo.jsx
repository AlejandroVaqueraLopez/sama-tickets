//elements
import LightLabel from "./elements/LightLabel";

export default function previewCustomerInfo({ content }) {
    const { id, name, secondName, phoneNumber, email } = content;
    return (
        <div className="preview-customer-info d-flex align-items-center flex-wrap">
            <LightLabel data={ id } style={ {  } }/>
            <LightLabel data={ name } style={ { backgroundColor: "#796EA8" } }/>
            <LightLabel data={ secondName } style={ { backgroundColor: "#049CB3" } }/>
            <LightLabel data={ phoneNumber } style={ { backgroundColor: "#8d2d66" } }/>
            <LightLabel data={ email } style={ { backgroundColor: "#EFB786" } }/>
        </div>
    );
}

//<CustomerInfo/>
                
//<BtnGeneral style={btnNewOrder} text="Nueva orden" event={null} link="/" />
            