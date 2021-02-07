const {Rule, Clause} = require('jen.js')
const {start: favoriteStart} = require('./favorite')
const {start: petStart} = require('./pet')

const start = new Rule(
    new Clause(() => favoriteStart  .evaluate()),
    new Clause(() => petStart       .evaluate()),
)

console.log(start.evaluate())
