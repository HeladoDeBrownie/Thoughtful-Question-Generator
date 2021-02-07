const {Rule, Clause} = require('jen.js')

const start = new Rule(
    new Clause('If you could have one superpower, what would it be?'),
    new Clause('What is your favorite Jazz Mickle album?'),
)

module.exports = {
    start,
}
