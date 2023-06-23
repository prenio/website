// Pokemon 1v1 Tournament
// Fully automated


const {calculate, Generations, Pokemon, Move} = calc;

const gen = Generations.get(5); // alternatively: const gen = 5;

var P1SpA = 3

const result = calculate(
  gen,
  new Pokemon(gen, 'Charizard', {
    item: 'Choice Specs',
    nature: 'Modest',
    evs: {spa: 252},
    boosts: {spd: 2},
  }),
  new Pokemon(gen, 'Chansey', {
    item: 'Eviolite',
    ability: 'Justified',
    abilityOn: true,
    nature: 'Calm',
    evs: {hp: 252, spd: 252},
  }),
  new Move(gen, 'Focus Blast')
);

console.log(result);