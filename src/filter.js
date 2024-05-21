import "./filter.css";

function Filter() {
	return (
		<div className='filter'>
			<input type={"search"} id='tag' placeholder='tag' />
			<input type={"text"} id='col' placeholder='fill in your color' />
			<select id='sel'>
				<option>Now</option>
				<option>This past week</option>
				<option>This past month</option>
				<option>This past year</option>
				<option>All time</option>
			</select>
		</div>
	);
}
export default Filter;
