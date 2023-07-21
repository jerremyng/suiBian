import { fireBaseAuth } from '../firebase.js'
import { useRef, useState} from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/main.css";
import "../Styles/Navbar.css";

export default function Navbar() { 

	var user = fireBaseAuth.currentUser;
	if (user != null) {
		var photo = user.photoURL;
	}

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
					<img src={require("../assets/logo2.png")} alt="Logo"></img>
				</a>
				<a href="/login">Sign-In</a>
				<a href="/">Home</a>
				<a href="/#">Saved</a>
				<a href="/#">SG-lossary</a>

				{/* <button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button> */}
			</nav>

			<img className='profile-img' src={(photo)} />

			{/* <button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button> */}

		</header>
	);
}