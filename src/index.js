import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./app";
import LoginPage from "./LoginPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<>
		<Router>
			<Routes>
				<Route path='/login' element={<LoginPage />} />
				<Route path='/' element={<App />} />
				<Route path='*' element={<h1>404 Page Error</h1>} />
			</Routes>
		</Router>
		{/* <App />
		<LoginPage /> */}
	</>
);
