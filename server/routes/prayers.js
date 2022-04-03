const express = require('express');
const router = express.Router();
const fs = require('fs');

let prayers = {};

function readPrayers(){
    let prayerData = fs.readFileSync(/*input database*/);
    const parsedPrayers= JSON.parse(prayerData);
    return parsedPrayers;
}

function writePrayers(data){
    const stringifedData = JSON.stringify(data);
    fs.writeFileSync(/*inputDataBase*/, stringifedData);
}
function validation(req){
    const {catagory, prayerInput} = req;

    if (!catagory || ! prayerInput){
        return "Error";
    }
        return "";
}

router.get("/", (req,res) => {
    readPrayers();
    res.status(200).send(readPrayers());
});

router.post('/savePrayers',(req,res) => {
    const prayers = readPrayers();
    const missingField = validation(req.body);
    if (missingField !== "") {
        return res.status(400).json({
            message: "Please include both fields!"
        });
    }
    const newPrayer = {
        catagory: req.body.catagory,
        prayerInput: req.body.prayerInput
    };

    prayers.push(newPrayer);
    writePrayers(prayers);
    res.status(201).json(newPrayer);
});

module.exports