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
import Nav from './components/common/Nav/Nav';
import Footer from './components/common/Footer/Footer';

const App = () => {
  const [drones, setDrones] = useState([]);
  const [reports, setReports] = useState([]);

  useEffect(() => {
    getDronesList().then(dronesList => setDrones(dronesList));
  }, []);


  //Get report for the selected drone
  const getReport = (id) => {
    reportByDrone(id).then(reports => setReports(reports));
  };

  //Get the selected drone (onClick) details
  const SelectedDrone = reports.length ? drones.filter(drone => drone.id === reports[0].drone_id)[0] : null;


  return (
    <>
      <Nav />
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
      <Footer />
    </>
  );
}

export default App;
