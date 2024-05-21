import "./footer.css";
import Icon from "./icons";

function Footer() {
	return (
		<div className='footer'>
			<div className='foot-cont'>
				<div className='foot'>
					<h1>dribbble</h1>
					<p>
						Dribbble is the world’s leading community for creatives to share,
						grow, and get hired.
					</p>
					<Icon />
				</div>

				<div className='foot-col-box'>
					<div className='foot-col'>
						<h5>For designers</h5>
						<p>Go Pro!</p>
						<p>Explore design work</p>
						<p>Design blog</p>
						<p>Overtime podcast</p>
						<p>Playoffs</p>
						<p>Code of conduct</p>
					</div>
					<div className='foot-col'>
						<h5>Hire designers</h5>
						<p>Post a job opening</p>
						<p>Post a freelance project</p>
						<p>Search for designers</p>
						<h5>Brands</h5>
						<p>Advertise with us</p>
					</div>
					<div className='foot-col'>
						<h5>Company About</h5>
						<p>Careers Support</p>
						<p>Media kit </p>
						<p>Testimonials</p>
						<p>API</p>
						<p>Terms of service</p>
						<p>Privacy policy</p>
						<p>Cookie policy</p>
					</div>
					<div className='foot-col'>
						<h5>Directories</h5>
						<p>Design jobs</p>
						<p>Designers for hire Freelance designers for hire</p>
						<p>Tags Places</p>
						<h5>Design assets</h5>
						<p>Creative</p>
						<p>Market</p>
						<p>Fontspring</p>
						<p>Font Squirrel</p>
					</div>
					<div className='foot-col'>
						<h5>Design Resources</h5>
						<p>Freelancing</p>
						<p>Design Hiring</p>
						<p>Design Portfolio</p>
						<p>Design Education</p>
						<p>Creative Process</p>
						<p>Design Industry Trends</p>
					</div>
				</div>
			</div>

			<hr />

			<div className='foot-last'>
				<p>&copy; 2023 Dribbble. All rights reserved</p>
				<p>21,074949 shots dribbbled</p>
			</div>
		</div>
	);
}

export default Footer;
