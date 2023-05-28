import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/main.css";
import { useNavigate } from "react-router-dom";


function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<img src={require("../Styles/suibian_logo.png")}
				style={{ width: 55, height: 55 }} />

			<nav ref={navRef}>
				<a href="/login">Sign-In</a>
				<a href="/#">Account</a>
				<a href="/#">Saved</a>
				<a href="/#">Community</a>
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