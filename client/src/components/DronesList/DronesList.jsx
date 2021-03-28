import './dronesList.css';
import DroneCard from './../DroneCard/DroneCard';

const DronesList = ({ drones, getReport }) => {
	return (
		<div className="droneContainer">
			{drones.map((drone) => {
				return <DroneCard key={drone.id} drone={drone} getReport={getReport} />;
			})}
		</div>
	);
};

export default DronesList;
