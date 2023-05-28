import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/main.css";
import { useNavigate } from "react-router-dom";
import Searchbar from "./Searchbar";


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
				<a href="/login">Sign-In</a>
				<a href="/#">Account</a>
				<a href="/#">Saved</a>
				<a href="/#">Community</a>
				<a href="/#">SG-lossary</a>
				<Searchbar/>
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