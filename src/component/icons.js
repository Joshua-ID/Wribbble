import React from "react";
import sc1 from "../icon/dribbble.svg";
import sc2 from "../icon/facebook.svg";
import sc3 from "../icon/Instagram.svg";
import sc4 from "../icon/pinterest.svg";
import sc5 from "../icon/Whatsapp.svg";
import sc6 from "../icon/twitter.svg";

function Icon() {
	return (
		<div className='icons'>
			<img src={sc1} alt='icon' />
			<img src={sc6} alt='icon' />
			<img src={sc2} alt='icon' />
			<img src={sc3} alt='icon' />
			<img src={sc4} alt='icon' />
			<img src={sc5} alt='icon' />
		</div>
	);
}

export default Icon;
