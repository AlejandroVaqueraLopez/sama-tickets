//components
import PreviewCustomerInfo from "./PreviewCustomerInfo";

//elements
import BtnGeneral from "./elements/BtnGeneral";

export default function CustomerPreviewListItem ({ content }) {

    //btn style
    const btnModify = {
        color: "#fff",
        backgroundColor: "#000",
        borderRadius: "5px",
        fontSize: "18px", 
        margin: "18px 0px"
    }
    const btnDelete = {
        color: "#fff",
        backgroundColor: "#000",
        borderRadius: "5px",
        fontSize: "18px", 
        margin: "18px 0px"
    }

    return (
        <li className="container customer-preview-list-item my-3 mx-0">
            <div className="row ps-3 ">
                <div className="col-12 col-lg-12 my-3 px-0">
                    <PreviewCustomerInfo content={ content }/>
                </div>
            </div>
        </li>
    );
}
//
                    
/*

                <div className="col-12 col-lg-2 px-0">
                    <BtnGeneral style={ btnDelete } text="Eliminar" event={ null } link={ null } />
                </div>
*/