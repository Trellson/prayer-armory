const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const favRoute = require("./routes/prayers.js");
//const saveRoute = require('./routes/save')

app.use(cors());
app.use(express.json())
app.use('/prayers', favRoute)
//app.use('/savePrayers', saveRoute)


app.listen(5000, function(){
    console.log('server running at http://localhost:5000')
})