const declareWinner = require('./declareWinner');

const strongFighter = {

    name: 'Szikla Szilard',
    health: 1000,
    damagePerAttack: 50
}
const weakFighter = {

    name: 'Minden Aron',
    health: 100,
    damagePerAttack: 10
}


test('the fighter in the first parameter should win', () => {
    expect(declareWinner(strongFighter,weakFighter, strongFighter.name))
        .toBe(strongFighter.name)
})

test('the fighter in the second parameter should win', () => {
    expect(declareWinner(weakFighter,strongFighter, strongFighter.name))
        .toBe(strongFighter.name)
})

test('the secondFighter should win', () => {
    expect(declareWinner(strongFighter,weakFighter,weakFighter.name))
        .toBe(strongFighter.name)
})