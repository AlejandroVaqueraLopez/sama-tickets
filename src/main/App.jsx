import { useState, useEffect } from 'react'
import axios from "axios";
import '../styles/App.css';
import { Routes, Route, Link } from "react-router-dom";
import "../styles/components/navbar.css";
import "../styles/components/header.css";

//pages
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

//components
import Navbar from "./components/Navbar";

function App() {
	return (
		<div className="App Container app-container">
			<header className="header-container">
				<Navbar/>
			</header>
			<Routes>
				<Route path="/" element={ <Dashboard/> } />
				<Route path="/signin" element={ <SignIn /> } />
				<Route path="/signup" element={ <SignUp /> } />
			</Routes>

		</div>
	);
}

export default App
