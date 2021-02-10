

module.exports = (callback, params, intensity) => {
    const chanceDraw = Math.floor(Math.random() * 100);
    let chanceToOccur = intensity || 50; 
    const goingToHappen = chanceDraw <= chanceToOccur;

    if(goingToHappen) {
        if (params) {
            return callback(params);
        } else {
            return callback();
        }
    } else {
        return null
    }
}