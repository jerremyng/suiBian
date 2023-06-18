import { useRef, useState} from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/main.css";
import { useNavigate } from "react-router-dom";
import Searchbar from "./Searchbar";

import "../Styles/Navbar.css";


function Navbar() { 
	const navRef = useRef();
	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<nav ref={navRef}>
				<a href="/#">
					<img src={require("../assets/logo2.png")} alt="Coding Beauty logo"></img>
				</a>
				<a href="/login">Sign-In</a>
				<a href="/">Home</a>
				<a href="/#">Saved</a>
				<a href="/#">SG-lossary</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>

		</header>
	);
}

export default Navbar;