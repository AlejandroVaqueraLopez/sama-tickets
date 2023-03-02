import { useState, useEffect } from 'react'
import axios from "axios";
import { Routes, Route, Link } from "react-router-dom";

//styles
import '../styles/App.css';

//pages
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";


//components
import Header from "./components/Header";

function App() {
	return (
		<div className="App bg-warning container-fluid app-container ">
			<div className="container">
				<div className="row">
					<div className="col">
						<Routes>
							<Route path="/" element={ <Dashboard/> } />
							<Route path="/signin" element={ <SignIn /> } />
							<Route path="/signup" element={ <SignUp /> } />
						</Routes>

					</div>
				</div>

			</div>

		</div>
	);
}
/*

app-container position-relative 
* */



export default App
