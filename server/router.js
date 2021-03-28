const express = require('express');
const router = express.Router();
const getAllDrones = require('./controller/drones');
const getReportByDroneId = require('./controller/reports');


router.get('/drones', getAllDrones);
router.get('/report/:droneId', getReportByDroneId);


module.exports = router;