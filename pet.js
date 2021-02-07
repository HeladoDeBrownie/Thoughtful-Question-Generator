const {Rule, Clause, RuleVariable, need, once} = require('jen.js')

const animalCategory = new RuleVariable(null)

const start = new Rule(new Clause(() =>
    `Would you rather have ${anAnimal} or ${anAnimal} as a pet?`
))

const anAnimal = new Rule(
    new Clause(() => {
        need(animalCategory.get() !== 'unusual')
        animalCategory.set('usual')
        return aUsualAnimal.evaluate()
    }),

    new Clause(() => {
        need(animalCategory.get() !== 'usual')
        animalCategory.set('unusual')
        return anUnusualAnimal.evaluate()
    }),
)

const aUsualAnimal = new Rule(
    new Clause(() => { once(); return 'a cat' }),
    new Clause(() => { once(); return 'a dog' }),
)

const anUnusualAnimal = new Rule(
    new Clause(() => { once(); return 'a stegosaurus' }),
    new Clause(() => { once(); return 'a velociraptor' }),
)

module.exports = {
    start,
}
