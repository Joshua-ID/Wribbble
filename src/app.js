import React from "react";
import Nav from "./component/nav";
import Header from "./component/header";
import Footer from "./component/footer";
import Layout from "./component/layout";
import Smoke from "./smoke";
import Error from "./error";

function App() {
	return (
		<div>
			<Error />
			<Nav />
			<Smoke />
			<Header />
			<Layout />
			<Footer />
		</div>
	);
}

export default App;
