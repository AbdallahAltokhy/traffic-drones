import { useHistory } from 'react-router-dom';
import('./droneCard.css');

const DroneCard = ({ drone, getReport }) => {
	let history = useHistory();

	const redirect = () => {
		history.push('/report');
	};

	return (
		<div className="card">
			<img className="card-img" src={drone.image} alt="drone-Img" />
			<p className="drone-data ">NAME:</p>
			<span className="drone-detail drone-name">{drone.name}</span>
			<p className="drone-data">BATTERY:</p>
			<span className="drone-detail">{drone.batery} mA</span>
			<p className="drone-data">AGE:</p>
			<span className="drone-detail">{drone.age} Years</span>
			<button
				className="drone-btn"
				onClick={() => {
					getReport(drone.id);
					redirect();
				}}
			>
				See Reports
			</button>
		</div>
	);
};

export default DroneCard;
