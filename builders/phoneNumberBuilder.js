module.exports = () => { // only creates fake, US phone numbers
    // 0100-0199 


    return `${firstOctet()}-${middleOctet()}-${lastOctet()}`


    function firstOctet () {
        let randomNumber = Math.floor(Math.random() * 999)
        if(randomNumber < 100) {
            if(randomNumber < 10) {
                randomNumber = `10${randomNumber}`
            } else {
                randomNumber = `1${randomNumber}`;
            }
        } 

        return `${randomNumber}`;
    }

    function middleOctet () {
        return '555'
    }

    function lastOctet () {
        let defFirst = '01';
        let randomLast = Math.floor(Math.random() * 100);

        
        if(`${randomLast}`.length < 2) {
            randomLast = `0${randomLast}`;
        }
        return `${defFirst}${randomLast}`
    }
}