const {Rule, Clause} = require('jen.js')

const start = new Rule(new Clause(() => `What is your favorite ${thing}?`))

const thing = new Rule(
    new Clause('color'),
    new Clause(() => `genre of ${thingWithGenres}`),
    new Clause('object'),
    new Clause('place'),
)

const thingWithGenres = new Rule(
    new Clause('architecture'),
    new Clause('art'),
    new Clause('fashion'),
    new Clause('film'),
    new Clause('music'),
    new Clause('novels'),
    new Clause('tweets'),
    new Clause('videogames'),
)

module.exports = {
    start,
}
