const extensions = require('../templates/extensions');
module.exports = () => {
    const firstWord = getRandomText();
    const secondWord = getRandomText();
    const extension = extensions[Math.floor(Math.random() * extensions.length)];

    return `${firstWord}@${secondWord}.${extension}`;
}

function getRandomText() {
    const word = Math.random().toString(36).substring(2, 15);
    if(word.length > 1) {
        return word;
    } else return getRandomText();
}