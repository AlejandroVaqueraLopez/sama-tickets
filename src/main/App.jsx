import { useState, useEffect } from 'react'
import axios from "axios";
import { Routes, Route, Link } from "react-router-dom";

//styles
import '../styles/App.css';

//pages
import User from "./pages/User";
import Dashboard from "./pages/Dashboard";
import Customer from "./pages/Customer";
import Order from "./pages/Order";
import Calendar from "./pages/Calendar";
import Config from "./pages/Config";
import Chat from "./pages/Chat";

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";


//components
import Header from "./components/Header";

function App() {
	return (
		<div className="App container-fluid app-container position-relative">
				<Header/>
				<Routes>
					<Route path="/user" element={ <User/> } />
					<Route path="/" element={ <Dashboard/> } />
					<Route path="/customer" element={ <Customer/> } />
					<Route path="/order" element={ <Order/> } />
					<Route path="/calendar" element={ <Calendar/> } />

					<Route path="/config" element={ <Config/> } />
					<Route path="/chat" element={ <Chat/> } />

					<Route path="/signin" element={ <SignIn /> } />
					<Route path="/signup" element={ <SignUp /> } />
				</Routes>
		</div>
	);
}
/*

 
*/



export default App
