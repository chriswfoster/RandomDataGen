// const csvFilePath = './sales_20210204.csv'
// const csv = require('csvtojson');
const fs = require('fs');
const { Parser } = require('json2csv');
const { AsyncParser } = require('json2csv');
const firstAndLastnameBuilder = require('../builders/firstAndLastnameBuilder');
const phoneNumberBuilder = require('../builders/phoneNumberBuilder');
const refNumBuilder = require('../builders/refNumBuilder');
const sporadicData = require('../builders/sporadicData');
const dateBuilder = require('../builders/dateBuilder');
const streetAddressBuilder = require('../builders/streetAddressBuilder');
const fakeStates = require('../templates/fakeStateNames')
const randomWords = require('../templates/randomWords')
const nouns = require('../templates/nouns')
const outputPath = './YourCSVFile.csv'

module.exports = (rowCount) => {

    // Define the rows your CSV will have:
    const csvRowCount = rowCount || 100;
    
    // Structure your JSON to CSV here
    const jsonStructure = [
        {
            title: 'Mobile',
            value: phoneNumberBuilder,
        }, 
        {
            title: 'Full Name',// what you want that column name to be.
            value: firstAndLastnameBuilder, // what you want to go in that column
            // value: () => firstAndLastnameBuilder("male"), // name builder has Gender Bias!!!! Pass in "male" or "female" to get those types of names only
        }, 
        {
            title: "somePref",
            value: `${randomWords[Math.floor(Math.random() * randomWords.length)]} ${nouns[Math.floor(Math.random() * nouns.length)]}`
        },
        {
            title: "DOB",
            value: dateBuilder // static data
        },
        {
            title: "PosRefNum", 
            value: () => sporadicData(refNumBuilder, [], 70)    // want to randomize your data? Some fields blank - some not?
                                                        // the params for sporadicData are: callback, params, intensity... 
                                                        // the function to randomize, params to pass into the random fn, and 1-100 chance it'll happen (default is 50%)
        },
        // {
        //     title: "WhateverIWant",
        //     value: () => { 
        //         let chance = Math.floor(Math.random() * 50) + 22;
        //         return ` ${chance} chance it'll snow where you live today!`;
        //     }
        // },
        {
            title: "Postal Code",
            value: "00000"
        },
        {
            title: "Street Address",
            value: streetAddressBuilder
        },
        {
            title: 'State',
            value: () => fakeStates[Math.floor(Math.random() * fakeStates.length)]
        },
        {
            title: "Country",
            value: "US"
        }
    ]
    
    let builtJSON = [];
    
    let i = 0;
    while (i < csvRowCount) {
        let newObj = {};
        jsonStructure.forEach(obj => {
            let val = obj.value;
            if(typeof val === 'function') {
                val = val();
            }
            newObj[obj.title] = val;
        })
        builtJSON.push(newObj);
        i++;
    }
    // return builtJSON;
    const json2csvParser = new Parser();
    const csv = json2csvParser.parse(builtJSON);
    fs.writeFile(outputPath, csv, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    }); 
    // const output = createWriteStream(outputPath, { encoding: 'utf8' })
    // const asyncParser = new JSON2CSVAsyncParser(opts, transformOpts);
    // const parsingProcessor = asyncParser.fromInput(csv).toOutput(output);

// parsingProcessor.promise(false).catch(err => console.error(err));
}