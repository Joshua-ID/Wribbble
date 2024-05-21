import React from "react";
import "./header.css";
import search from "../icon/searchengin.svg";
// import smk from "../icon/smoke.mp4";

function Header() {
	return (
		<div className='ova'>
			<div className='header'>
				<div className='vid-cont'>
					<div className='headcont'>
						<div className='headbtn-1'>
							<button>Discovery</button>
							<button>Animation</button>
							<button>Branding</button>
							<button>Illustration</button>
							<button>Mobile</button>
							<button>Print</button>
							<button>Product Design</button>
							<button>Typography</button>
							<button>Web Design</button>
						</div>
						<div className='content'>
							<h1>
								Explore the world leading <br /> design portfolios
							</h1>
							<p>
								Millions of designers and agencies around the world showcase
								their portfolio word on Dribbble - the home to the world best
								design and creative professionals
							</p>
							<img className='srch' src={search} alt='search' />
							<input type='search' placeholder='Search...' />
						</div>
						<div className='headbtn-2'>
							<p>Trending searches</p>
							<button>landing page</button>
							<button>ios</button>
							<button>food</button>
							<button>ux design</button>
							<button>app design</button>
						</div>
					</div>
					<p className='trademark'>@idarajoshua12</p>
				</div>
			</div>
		</div>
	);
}

export default Header;
