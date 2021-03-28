import moment from 'moment';
import './droneReport.css';

const DroneReport = ({ reports, drone }) => {
	return (
		<div className="container">
			{drone ? (
				<div className="drone-details">
					<h2 className="selected-drone-name">{drone.name}</h2>
					<img className="selected-drone-img" src={drone.image} alt="" />
				</div>
			) : null}
			<table>
				<thead>
					<tr>
						<th scope="col">Time</th>
						<th>Speed</th>
						<th>Latitude</th>
						<th>Longitude</th>
						<th>Traffic</th>
					</tr>
				</thead>
				<tbody>
					{reports.map((report) => (
						<tr key={report.id}>
							<td data-label="Time">{moment(report.time).format('LT')}</td>
							<td data-label="Speed">{report.speed}</td>
							<td data-label="Latitude">{report.latitude}</td>
							<td data-label="Longitude">{report.longitud}</td>
							<td data-label="Traffic">
								<span className={report.traffic_conditions}>
									{report.traffic_conditions}
								</span>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default DroneReport;
