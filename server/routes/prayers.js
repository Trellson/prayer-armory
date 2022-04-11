const express = require('express');
const router = express.Router();
const fs = require('fs');
const {v4:uuidv4} = require('uuid');
let prayers = {};

function readPrayers(){
    let prayerData = fs.readFileSync('data/treasures.json');
    const parsedPrayers= JSON.parse(prayerData);
    return parsedPrayers;
}

function writePrayers(data){
    const stringifedData = JSON.stringify(data);
    fs.writeFileSync('data/treasures.json', stringifedData);
}
function validation(req){
    const {category, prayerInput, scriptures} = req;
    if (!scriptures){
        return  "Scripture Reference is Required" 
    }
    if (!category){
        return "Category is Required"
        
    } 
    if (!prayerInput){
        return "Prayer Input is Required"
    }
        return "";
}

router.get("/", (req,res) => {
    readPrayers();
    res.status(200).send(readPrayers());
});
router.get('/savePrayers',(req,res) => {
    let prayerData = fs.readFileSync('data/treasures.json');
    const parsedPrayers= JSON.parse(prayerData);
    return res.status(200).json({
        parsedPrayers
    })
})
router.post('/savePrayers',(req,res) => {
    console.log('whatever');
    const prayers = readPrayers();
    const missingField = validation(req.body);
    if (missingField !== "") {
        return res.status(400).json({
            message: "Please include all fields!"
        });
    }
    const newPrayer = {
        id:uuidv4(),
        category: req.body.category,
        prayerInput: req.body.prayerInput,
        scriptures: req.body.scriptures,
    };

    prayers.push(newPrayer);
    writePrayers(prayers);
    res.status(201).json(newPrayer);
});

module.exports = router