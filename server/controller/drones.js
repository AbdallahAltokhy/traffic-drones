const { drones } = require('../mock-data/drones.json');

const getAllDrones = (req, res) => {
  res.send(drones);
};

module.exports = getAllDrones;