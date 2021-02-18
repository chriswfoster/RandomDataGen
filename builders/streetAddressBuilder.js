const streetNames = require('../templates/streetNames')

module.exports = () => { 
    return `${randomNumber()} ${randomStreet()}`

    function randomNumber () {
        let randomNumber = Math.floor(Math.random() * 9999)
        return `${randomNumber}`;
    }

    function randomStreet () {
        const randomStreet = streetNames[Math.floor(Math.random() * streetNames.length)];
        return randomStreet;
    }
}