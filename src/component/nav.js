import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

function Nav() {
	return (
		<div className='navbar'>
			<div className='container'>
				<h1>dribbble</h1>
				<ul>
					<li>Find talent</li>
					<li>For designers</li>
					<li>Inspiration</li>
					<li>Learn design</li>
					<li>Go Pro</li>
				</ul>
			</div>
			<div className='navbtn'>
				<Link to='/login'>
					<button>Log in</button>
				</Link>
				<button>Sign up</button>
			</div>
		</div>
	);
}

export default Nav;
