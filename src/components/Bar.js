import { fireBaseAuth } from '../firebase.js'
import { onAuthStateChanged } from 'firebase/auth';
import { useRef, useState, useEffect} from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import noAcc from '../assets/no_acc.png'
import "../Styles/main.css";
import "../Styles/Navbar.css";

export default function Navbar() { 

	const navRef = useRef();
	// const showNavbar = () => {
	// 	navRef.current.classList.toggle(
	// 		"responsive_nav"
	// 	);
	// };

	return (
		<header>
			<nav ref={navRef}>
				<a href="/#">
					<img src={require("../assets/logo2.png")} alt="Logo"></img>
				</a>
				<a href="/">Home</a>
				<a href="/#">Saved</a>
				<a href="/#">SG-lossary</a>

				{/* <button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button> */}
			</nav>

			<Profile />

			{/* <button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button> */}

		</header>
	);
}

function Profile() {
	//import user profile pic
	const [photoURL, setPhotoURL] = useState('../assets/no_acc.png');
	const [name, setName] = useState('Sign-in');

	onAuthStateChanged(fireBaseAuth, (user) => {
		if (user) {
			setPhotoURL(user.photoURL);
			setName(user.displayName);
		} else {
			setPhotoURL(noAcc);
			setName('Sign-in');
		}
	  });

	return(
		<div className='profile'>
			<img className='profile-img' src={photoURL} alt="profile pic" />
			<a href='/login'>{name}</a>
		</div>
	);

}