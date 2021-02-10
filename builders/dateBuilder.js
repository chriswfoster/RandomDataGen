const moment = require('moment');
module.exports = () => {
    const start = new Date(1970, 0, 1)
    const end = new Date()

    return moment(new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))).format('MM/DD/YYYY')+" 12:00:00 AM"
}