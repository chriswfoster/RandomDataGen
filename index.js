/// Hello, I heard you like making dummy data. Well good news, this is where ya do it!
const randomJSONtoCSV = require('./controllers/randomJSONtoCSV');


let plzGetMeData = randomJSONtoCSV(5000); // this function gives you some customized JSOn data

console.log(plzGetMeData);