
//components
import CustomerPreviewListItem from "../components/CustomerPreviewListItem";
import SearchBar from "../components/elements/SearchBar";


//hooks
import { useState } from "react";

//styles
import "../../styles/components/Customer.css";

export default function Customer() {

    //const [ response, setResponse ] = useState();
    //setResponse();
    const customerList = [
        {
            id: 3214,
            name: "alejandro",
            secondName: "vaquera",
            phoneNumber: "6645559598",
            email: "ale@gmail.com"
        },
        {
            id: 5432,
            name: "tupac",
            secondName: "Vaadflk",
            phoneNumber: "666645542",
            email: "ale@gmail.com"
        },
        {
            id: 3245,
            name: "Donald",
            secondName: "Thrump",
            phoneNumber: "665436589",
            email: "ale@gmail.com"
        },
        {
            id: 3458,
            name: "ajandro",
            secondName: "Lavidalocasecomeconsandiaytomate",
            phoneNumber: "66545434442",
            email: "fail.com"
        },
        {
            id: 2134,
            name: "alejandro",
            secondName: "vaquera",
            phoneNumber: "6645559598",
            email: "ale@gmail.com"
        },
        {
            id: 3245,
            name: "tupac",
            secondName: "Vaadflk",
            phoneNumber: "666645542",
            email: "ale@gmail.com"
        },
        {
            id: 3454,
            name: "Donald",
            secondName: "Thrump",
            phoneNumber: "665436589",
            email: "ale@gmail.com"
        },
        {
            id: 3448,
            name: "ajandro",
            secondName: "Lavidalocasecomeconsandiaytomate",
            phoneNumber: "66545434442",
            email: "fail.com"
        },
        {
            id: 6546,
            name: "alejandro",
            secondName: "vaquera",
            phoneNumber: "6645559598",
            email: "ale@gmail.com"
        },
        {
            id: 6553,
            name: "tupac",
            secondName: "Vaadflk",
            phoneNumber: "666645542",
            email: "ale@gmail.com"
        },
        {
            id: 1441,
            name: "Donald",
            secondName: "Thrump",
            phoneNumber: "665436589",
            email: "ale@gmail.com"
        },
        {
            id: 1243,
            name: "ajandro",
            secondName: "Lavidalocasecomeconsandiaytomate",
            phoneNumber: "66545434442",
            email: "fail.com"
        }
    ];

	const btnNewOrder = {
		color: "#fff",
		backgroundColor: "#000",
		borderRadius: "10px",
		width: "54%",
		fontSize: "18px", 
		margin: "18px 0px"
	}
    
    //search-bar props
    const options = {
        sideBar: false
    }
    const content = {
        placeholder: "Buscar..."
    }
    const searchStyle = {
        width: "100%"
    }

    return (
		<div className="main-component pt-5">
			<div className="main-container container">
				<div className="row mx-0 px-0">
					<div className="col-12">

                        <section className="customer-section-A my-4 d-flex flex-column align-items-center">
                            <SearchBar options={ options } content={ content } style={ searchStyle }/>
                            
                        </section>

						<section className="customer-section-B my-4 d-flex flex-column align-items-center">
                            <ul className="customer-preview-list ">
                                { customerList.map((item) => <CustomerPreviewListItem key={ item.id } content={ item }/>) }
                            </ul>
						</section>


					</div>
				</div>
			</div>
		</div>
    )
}