const {Rule, Clause} = require('jen.js')
const {start: favoriteStart} = require('./favorite')
const {start: fixedStart} = require('./fixed')
const {start: petStart} = require('./pet')

const start = new Rule(
    new Clause(() => favoriteStart  .evaluate()),
    new Clause(() => fixedStart     .evaluate()),
    new Clause(() => petStart       .evaluate()),
)

console.log(start.evaluate())
