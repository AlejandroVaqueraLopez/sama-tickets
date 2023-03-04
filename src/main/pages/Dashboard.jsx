//components
import MenuPanel from "../components/MenuPanel";
//styles
import "../../styles/components/Dashboard.css";

 export default function Dashboard() {
	/*const [tickets, setTickets] = useState([]);
	const [description, setDescription] = useState("");
	const [editedData, setEditedData] = useState([]);// [name, newValue, id] the id is from the father object

	const dataLiveChange = async (e) => {
		const id = e.currentTarget.dataset.id;
		const name = e.currentTarget.attributes.name.value;
		const newValue = e.currentTarget.value;
		setEditedData([name, newValue, id]);
		console.log(id, name, newValue);
	}

	const focusOut = async () => {// custom updater for inputs live change 
		const [field, newValue, id] = editedData;
		console.log(field,newValue,id);
		const ticketDoc = doc(db, "TICKET",id);
		const newField = {[field]: newValue};
		await updateDoc(ticketDoc, newField); 
		console.log("ticket updated succesfully");
	}

	useEffect( () => {
		axios.get("http://localhost:4500/api/ticket")
			.then((response) => {
				setTickets(response.data);
				console.log("All tickets");
			})
			.catch((err) => {console.log(err)});
	}, [])

	/**
	 * 
		  <div style={{outline: "solid red 1px"}}>
	  		<input placeholder="description" onChange={(event) => {setDescription(event.target.value)}}/>
	  		<button onClick={createTicket}>Create ticket</button>
		  </div>
	 * 
	 */

          /*

  return (
	  <div>
		<ol style={{outline:"solid black 1px"}}>
		  {tickets.map((item) => {
			  return (
				<li key={item.id} >
					<h5>{item.id}</h5> 
					<input data-id={item.id} name="name" onChange={dataLiveChange} onBlur={focusOut} defaultValue={item.NAME}/> 
					<input data-id={item.id} name="description" onChange={dataLiveChange} onBlur={focusOut} defaultValue={item.DESCRIPTION}/> 
					<input data-id={item.id} name="device" onChange={dataLiveChange} onBlur={focusOut} defaultValue={item.DEVICE}/> 
					<input data-id={item.id} name="client" onChange={dataLiveChange} onBlur={focusOut} defaultValue={item.CLIENT}/> 
				</li>
			  );	  
		  })}
		</ol>
	  </div>
  )
  */

    return (
		<div>
			<div className="row">
				<div className="col">
					<section className="dashboard-section-A my-4 d-flex justify-content-center">
						<img className="main-logo-A" src="src/assets/main-logo.webp" alt="" />
					</section>
				</div>
			</div>
			<div className="row">
				<div className="col">
					<section className="dashboard-section-A my-4 d-flex justify-content-center">
						<img className="main-logo-A" src="src/assets/main-logo.webp" alt="" />
					</section>
				</div>
			</div>
			<div className="row">
				<div className="col">
					<section className="dashboard-section-A my-4 d-flex justify-content-center">
						<img className="main-logo-A" src="src/assets/main-logo.webp" alt="" />
					</section>
				</div>
			</div>
		</div>
    )
}

/**
 * 
 * 
 * 
 * 

			<div className="row mx-0 px-0">
				<div className="col px-0 mx-0">
					<section className="container dashboard-section-A my-4 d-flex justify-content-center">
						<img className="main-logo-A" src="src/assets/main-logo.webp" alt="" />
					</section>
				</div>
			</div>

 * 
 */


