import eye from "../icon/eye.svg";
import heart from "../icon/heart.svg";
import folder from "../icon/folder.svg";
import { useState } from "react";
import "./layout.css";

const Box = ({image, imglog, para, paragraph, pro, num, num1}) => {
	const [slide, setSlide] = useState(false);

	const slOut = () => {
		setSlide(!slide);
	};

	return (
		<div className='layBox'>
			<div className='alt' onMouseEnter={slOut} onMouseOut={slOut}>
				<img className='alt-pix' src={image} alt='pic' />
				{slide && (
					<div className='slide'>
						<p>{para}</p>
						<div className='slide-2'>
							<img src={folder} alt='lg' />
							<img src={heart} alt='lg' />
						</div>
					</div>
				)}
			</div>
			<div className='box-details'>
				<img src={imglog} alt='profile' />
				<div className='profile'></div>
				<p>{paragraph}</p>
				<p className='tip'>{pro}</p>
				<img className='ic' src={eye} alt='profile' />
				<p>{num}</p>
				<img className='ic' src={heart} alt='profile' />
				<p>{num1}</p>
			</div>
		</div>
	);
};

export default Box;
