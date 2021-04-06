const {Rule, Clause} = require('jen.js')

const start = new Rule(
    new Clause('If you could have one superpower, what would it be?'),
    new Clause('Where would you like to go on vacation?'),
)

module.exports = {
    start,
}
