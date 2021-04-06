const {Rule, Clause} = require('jen.js')
const {start: favoriteStart} = require('./favorite')
const {start: petStart} = require('./pet')
const {start: superpowerStart} = require('./superpower')
const {start: fixedStart} = require('./fixed')

const start = new Rule(
    new Clause(() => favoriteStart      .evaluate(), {weight: 4}),
    new Clause(() => petStart           .evaluate(), {weight: 4}),
    new Clause(() => superpowerStart    .evaluate(), {weight: 4}),
    new Clause(() => fixedStart         .evaluate(), {weight: 1}),
)

module.exports = {
    start,
}
