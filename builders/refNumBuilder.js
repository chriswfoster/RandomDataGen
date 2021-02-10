const { v4: uuidv4 } = require('uuid');

module.exports = () => {
    const newUuid = uuidv4();
    const splitUuid = newUuid.split('-');
    return `${splitUuid[0]}${splitUuid[1]}`;
}