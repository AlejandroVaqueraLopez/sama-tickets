import { useState, useEffect } from 'react'
import axios from "axios";
import { Routes, Route, Link } from "react-router-dom";

import '../styles/App.css';
import "../styles/components/Header.css";

//pages
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

//components
import Navbar from "./components/Navbar";

function App() {
	return (
		<div className="App container-fluid app-container position-relative px-0">
			<header className="header-container position-fixed">
				<div className="header-container-content position-relative">
					<Navbar/>
				</div>
			</header>
			<Routes>
				<Route path="/" element={ <Dashboard/> } />
				<Route path="/signin" element={ <SignIn /> } />
				<Route path="/signup" element={ <SignUp /> } />
			</Routes>

		</div>
	);
}
/*

* */



export default App
