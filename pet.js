const {Rule, Clause, RuleVariable, need, once} = require('jen.js')

const animalCategory = new RuleVariable(null)

const start = new Rule(new Clause(() =>
    `Would you rather have ${anAnimal} or ${anAnimal} as a pet?`
))

const anAnimal = new Rule(
    //Always choose only usual or only unusual animals.

    new Clause(() => {
        need(animalCategory.get() !== 'unusual')
        animalCategory.set('usual')
        return aUsualAnimal.evaluate()
    }, {weight: 8}),

    new Clause(() => {
        need(animalCategory.get() !== 'usual')
        animalCategory.set('unusual')
        return anUnusualAnimal.evaluate()
    }, {weight: 1}),
)

const aUsualAnimal = new Rule(
    new Clause(() => aBird              .evaluate()),
    new Clause(() => aMammal            .evaluate()),
    new Clause(() => anotherUsualAnimal .evaluate()),
)

const aBird = new Rule(
    new Clause(() => { once(); return 'a cockatiel' }),
    new Clause(() => { once(); return 'an owl'      }),
    new Clause(() => { once(); return 'a parrot'    }),
)

const aMammal = new Rule(
    new Clause(() => aCat.evaluate()                 ),
    new Clause(() => { once(); return 'a dog'       }),
    new Clause(() => { once(); return 'a hamster'   }),
    new Clause(() => { once(); return 'a horse'     }),
)

const aCat = new Rule(
    new Clause(() => { once(); return 'a cat'   }, {weight: 10}),
    new Clause(() => { once(); return 'a lion'  }),
    new Clause(() => { once(); return 'a tiger' }),
)

const anotherUsualAnimal = new Rule(
    new Clause(() => { once(); return 'a fish'      }),
    new Clause(() => { once(); return 'a snake'     }),
    new Clause(() => { once(); return 'a tarantula' }),
)

const anUnusualAnimal = new Rule(
    new Clause(() => aDinosaur          .evaluate()),
    new Clause(() => aMythicalCreature  .evaluate()),
)

const aDinosaur = new Rule(
    new Clause(() => { once(); return 'a pterodactyl'   }),
    new Clause(() => { once(); return 'a stegosaurus'   }),
    new Clause(() => { once(); return 'a velociraptor'  }),
)

const aMythicalCreature = new Rule(
    new Clause(() => { once(); return 'a dragon'    }),
    new Clause(() => { once(); return 'a phoenix'   }),
    new Clause(() => { once(); return 'a unicorn'   }),
    new Clause(() => { once(); return 'a yeti'      }),
)

module.exports = {
    start,
}
