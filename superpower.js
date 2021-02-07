const {Rule, Clause, once} = require('jen.js')

const start = new Rule(new Clause(() =>
    `Would you rather be able to ${superpower} or ${superpower}?`
))

const superpower = new Rule(
    new Clause(() => usualSuperpower    .evaluate(), {weight: 10}),
    new Clause(() => unusualSuperpower  .evaluate(), {weight: 1}),
)

const usualSuperpower = new Rule(
    new Clause(() => { once(); return 'breathe fire'                }),
    new Clause(() => `communicate verbally with ${animals}`          ),
    new Clause(() => { once(); return 'fly'                         }),
    new Clause(() => { once(); return 'move objects with your mind' }),
    new Clause(() => { once(); return 'read minds'                  }),
    new Clause(() => { once(); return 'shapeshift'                  }),
    new Clause(() => { once(); return 'speak any human language'    }),
    new Clause(() => { once(); return 'teleport'                    }),
    new Clause(() => { once(); return 'turn invisible'              }),
)

const animals = new Rule(
    new Clause(() => { once(); return 'bugs'    }),
    new Clause(() => { once(); return 'cats'    }),
    new Clause(() => { once(); return 'dogs'    }),
    new Clause(() => { once(); return 'fish'    }),
    new Clause(() => { once(); return 'snakes'  }),
)

const unusualSuperpower = new Rule(
    new Clause(() => { once(); return 'accurately draw anything you can see' }),
    new Clause(() => { once(); return 'charge electronics with your body' }),
    new Clause(() => { once(); return 'make authentic-sounding dubstep noises' }),
    new Clause(() => { once(); return 'see in all directions at once' }),
    new Clause(() => { once(); return 'take flawless selfies every time' }),
    new Clause(() => { once(); return 'tell whenever someone is talking about you' }),
    new Clause(() => { once(); return 'think of the perfect comeback in any situation' }),
)

module.exports = {
    start,
}
