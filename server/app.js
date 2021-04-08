const express = require('express');
const cors = require("cors");
const router = require('./router');
const app = express();


app.use(cors());
app.use(express.json());
app.use('/api', router);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`App listening on port ${port} 🚀🚀`));