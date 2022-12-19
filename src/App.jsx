import { useState, useEffect } from 'react'
import './App.css'
import { db } from "./firebase-config" //our database from local file
import { collection, getDocs, addDoc, updateDoc, doc} from "firebase/firestore" //some firebase functions

function App() {
	const [ticket, setTicket] = useState([]);
	const [description, setDescription] = useState("");
	const [editedData, setEditedData] = useState([]);// [name, newValue, id] the id is from the father object
	const ticketsCollectionRef = collection(db, "ticket");

	const dataLiveChange = async (e) => {
		const id = e.currentTarget.dataset.id;
		const name = e.currentTarget.attributes.name.value;
		const newValue = e.currentTarget.value;
		await setEditedData([name, newValue, id]);
		console.log(id, name, newValue);
	}

	const focusOut = async () => {// custom updater for inputs live change 
		const field = editedData[0];
		const newValue = editedData[1];
		const id = editedData[2];
		console.log(newValue);

		const ticketDoc = doc(db, "ticket",id);
		const newField = {description: newValue};

		await updateDoc(ticketDoc,newField); 
		console.log("done?");
	}

	//const updateTicket = async () => { official standard update
	//	await updateDoc(ticketsCollectionRef, {description: description});//creating new register
	//}

	const createTicket = async () => {
		await addDoc(ticketsCollectionRef, {description: description});//creating new register
	}

	useEffect( () => {
		const getTickets = async () => {
			const data = await getDocs(ticketsCollectionRef);
			setTicket(data.docs.map( (item) => ({...item.data(), id: item.id })));
		}
		getTickets();
	}, [])

  return (
	  <div>
		  <div style={{outline: "solid red 1px"}}>
	  		<input placeholder="description" onChange={(event) => {setDescription(event.target.value)}}/>
	  		<button onClick={createTicket}>Create ticket</button>
		  </div>
		  {ticket.map((item) => {
			  return (
				  <ol key={item.id} style={{outline:"solid black 1px"}}>
				   <h5>{item.id}</h5> 
				   <input data-id={item.id} name="description" onChange={dataLiveChange} onBlur={focusOut} defaultValue={item.description}/> 
				  </ol>
			  );	  
		  })}
	  </div>
  )
}

export default App
