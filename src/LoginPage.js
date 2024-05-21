import React from "react";
import { Link } from "react-router-dom";
import Icon from "./component/icons";
import "./loginPage.css";

function LoginPage() {
	return (
		<div className='login'>
			<div className='slide-1'>
				<h1>dribbble</h1>
				<form>
					<h3>Login</h3>
					<input type='text' />
					<input type='password' />
					<Link to='/'>
						<button>Login</button>
					</Link>
					<div className='iconStyle'>
						<Icon />
					</div>
				</form>
			</div>
			<div className='slide-2'></div>
		</div>
	);
}
export default LoginPage;
