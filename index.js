const {Rule, Clause} = require('jen.js')
const {start: petStart} = require('./pet')

const start = new Rule(new Clause(() => petStart.evaluate()))

console.log(start.evaluate())
