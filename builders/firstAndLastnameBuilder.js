const maleNames = require('../templates/maleNames'); // 1 thousand male names
const lastNames = require('../templates/lastNames'); // 1 thousand last names
const femaleNames = require('../templates/femaleNames'); // 1 thousand female names

const genders = {
    male: maleNames,
    female: femaleNames
}
module.exports = (gender) => {
    let firstNames = [];
    if(gender) {
        firstNames = genders[gender];
    } else {
        firstNames = [...maleNames, ...femaleNames]
    }

    const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    let caseLastName = randomLastName.toLowerCase()
    caseLastName = caseLastName.charAt(0).toUpperCase()+ caseLastName.slice(1);
    return `${randomFirstName} ${caseLastName}`
}