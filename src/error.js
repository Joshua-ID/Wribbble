import React, { useState } from "react";
import "./error.css";
import error from "./icon/xmark.svg";

function Error() {
	const [err, setErr] = useState(true);

	const close = () => {
		setErr(!err);
	};

	return (
		<div>
			{err && (
				<div className='error'>
					<h3>Ensure to login-in or subscribe for more update....</h3>
					<img src={error} alt='error' onClick={close} />
				</div>
			)}
		</div>
	);
}

export default Error;
