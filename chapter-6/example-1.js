const speak = function (line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
}

const whiteRabbit = { type: 'white', speak };
const blackRabbit = { type: 'black', speak };

module.exports = { whiteRabbit, blackRabbit };

if (require.main === module) {
    whiteRabbit.speak("Oh my ears and whiskers, how late it's getting!");
    blackRabbit.speak("I could use a carrot right now.");
    speak.call(blackRabbit, 'Burp!');
}
