import "./layout.css";
import Filter from "../filter";
import { useState } from "react";
import Box from "./probs";
import p1 from "../icon/400079900778_524184.jpg";
import p4 from "../icon/400079900884_282852.jpg";
import p3 from "../icon/400082100428_262012.jpg";
import p2 from "../icon/400082700220_250194.jpg";
import fil from "../icon/signal.svg";
import pk1 from "../icon/px (16).jpg";
import pk2 from "../icon/px (2).jpg";
import pk3 from "../icon/px (3).jpg";
import pk4 from "../icon/px (4).jpg";
import pk13 from "../icon/px (13).jpg";
import pk14 from "../icon/px (14).jpg";
import pk15 from "../icon/px (15).jpg";
import pk16 from "../icon/px (11).jpg";
import pk17 from "../icon/px (17).jpg";
import pk18 from "../icon/px (18).jpg";
import pk19 from "../icon/px (19).jpg";
import pk20 from "../icon/px (20).jpg";

function Layout() {
	const [show, setShow] = useState(false);

	const hide = () => {
		setShow(!show);
	};

	const data = [
		{
			image: pk13,
			imglog: p4,
			para: "Kramium",
			paragraph: "Edidiong",
			pro: "PRO",
			num: "56",
			num1: "65k",
			id: 13,
		},
		{
			image: pk14,
			imglog: p2,
			para: "Savage",
			paragraph: "Samuel",
			pro: "PRO",
			num: "78",
			num1: "35k",
			id: 14,
		},
		{
			image: pk15,
			imglog: p3,
			para: "Kramium",
			paragraph: "Edidiong",
			pro: "PRO",
			num: "56",
			num1: "65k",
			id: 15,
		},
		{
			image: pk16,
			imglog: p1,
			para: "Savage",
			paragraph: "Samuel",
			pro: "PRO",
			num: "78",
			num1: "35k",
			id: 16,
		},
		{
			image: pk17,
			imglog: p4,
			para: "Kramium",
			paragraph: "Edidiong",
			pro: "PRO",
			num: "56",
			num1: "65k",
			id: 17,
		},
		{
			image: pk18,
			imglog: p2,
			para: "Savage",
			paragraph: "Samuel",
			pro: "PRO",
			num: "78",
			num1: "35k",
			id: 18,
		},
		{
			image: pk19,
			imglog: p3,
			para: "Kramium",
			paragraph: "Edidiong",
			pro: "PRO",
			num: "56",
			num1: "65k",
			id: 19,
		},
		{
			image: pk20,
			imglog: p1,
			para: "Savage",
			paragraph: "Samuel",
			pro: "PRO",
			num: "78",
			num1: "35k",
			id: 20,
		},
		{
			image: pk1,
			imglog: p4,
			para: "Kramium",
			paragraph: "Edidiong",
			pro: "PRO",
			num: "56",
			num1: "65k",
			id: 0,
		},
		{
			image: pk2,
			imglog: p2,
			para: "Savage",
			paragraph: "Samuel",
			pro: "PRO",
			num: "78",
			num1: "35k",
			id: 1,
		},
		{
			image: pk3,
			imglog: p3,
			para: "Kramium",
			paragraph: "Edidiong",
			pro: "PRO",
			num: "56",
			num1: "65k",
			id: 2,
		},
		{
			image: pk4,
			imglog: p1,
			para: "Savage",
			paragraph: "Samuel",
			pro: "PRO",
			num: "78",
			num1: "35k",
			id: 3,
		},
	];

	return (
		<div className='layout'>
			<div className='option'>
				<select className='opt'>
					<option>Popular</option>
					<option>New & NoteWorty</option>
				</select>

				<button onClick={hide}>
					<img className='filt' src={fil} alt='filt' />
					Filter
				</button>
			</div>

			{show && <Filter />}

			<div className='lay-cont'>
				<div className='lay-boxes'>
					{data.map((card) => {
						return (
							<Box
								key={card.id}
								image={card.image}
								imglog={card.imglog}
								para={card.para}
								paragraph={card.paragraph}
								pro={card.pro}
								num={card.num}
								num1={card.num1}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default Layout;
