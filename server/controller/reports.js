const { reports } = require('../mock-data/data.json');

const getReportByDroneId = (req, res) => {
  const report = reports.filter(report => report.drone_id === +req.params.droneId);
  res.send(report);
};

module.exports = getReportByDroneId;