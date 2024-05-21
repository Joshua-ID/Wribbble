import "./smoke.css";
import smk from "./icon/smoke.mp4";

function Smoke() {
	return (
		<div className='smoke'>
			<div className='overlay'>
				<video className='video' src={smk} autoPlay muted loop />
			</div>
		</div>
	);
}

export default Smoke;
