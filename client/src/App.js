import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './app.css';
import DronesList from './components/DronesList/DronesList';
import DroneReport from './components/DroneReport/DroneReport';
import getDronesList from './services/dronesService';
import reportByDrone from './services/reportsService';

const App = () => {
  const [drones, setDrones] = useState([]);
  const [reports, setReports] = useState([]);
  useEffect(() => {
    getDronesList().then(dronesList => setDrones(dronesList));
  }, []);

  const getReport = (id) => {
    reportByDrone(id).then(reports => setReports(reports));
  };

  console.log(reports);

  const SelectedDrone = reports.length ? drones.filter(drone => drone.id === reports[0].drone_id)[0] : null;


  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <DronesList getReport={getReport} drones={drones} />
          </Route>

          <Route path="/report">
            <DroneReport reports={reports} drone={SelectedDrone} />
          </Route>

        </Switch>
      </Router>
    </>
  );
}

export default App;
