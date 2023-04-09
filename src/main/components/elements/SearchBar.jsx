
//styles
import "../../../styles/componentszas

export default function SearchBar({ options, content, searchStyle }) {

    const { sideIcon } = options;
    const { placeholder } = content;

    return (
        <div className="container border border-warning">
            <div className="row py-2  d-flex justify-content-center align-items-center">
                <div  className="px-0 search-bar-container col-12 col-lg-5 border border-white">
                    <input placeholder={ placeholder } style={ searchStyle } className="txt-search" type="text" />
                </div>
                {
                    sideIcon ? (
                        <div className="col-12 col-lg-2 border border-white">
                            add
                        </div>
                    ):(
                        null
                    )
                }
            </div>

        </div>
    );
} 