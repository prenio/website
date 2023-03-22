//Contains information for all the types
//Includes type-matchups for each type
//Also includes file location for each jpeg

//These type_numbers are arbitrarily given to the types
//Its only for consistency
const types = ["Typeless", "Normal", "Fighting", "Flying", "Poison", "Ground", "Rock", "Bug", "Ghost", "Steel", "Fire", "Water", "Grass", "Electric", "Psychic", "Ice", "Dragon", "Dark", "Fairy"]
const type_numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]

// Labels and Numbers for reference
// [ 0: "Typeless", 1: "Normal", 2: "Fighting", 3: "Flying", 4: "Poison", 5: "Ground", 6: "Rock", 7: "Bug", 8: "Ghost", 9: "Steel", 10: "Fire", 11: "Water", 12: "Grass", 13: "Electric", 14: "Psychic", 15: "Ice", 16: "Dragon", 17: "Dark", 18: "Fairy" ]

//Returns the file location for the type image
const jpgFiles = ['typeless.jpg', 'normal.jpg', 'fighting.jpg', 'flying.jpg', 'poison.jpg', 'ground.jpg', 'rock.jpg', 'bug.jpg', 'ghost.jpg', 'steel.jpg', 'fire.jpg', 'water.jpg', 'grass.jpg', 'electric.jpg', 'psychic.jpg', 'ice.jpg', 'dragon.jpg', 'dark.jpg', 'fairy.jpg']

// Type Getting Hit
const typeless = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
const normal = [1, 1, 2, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
const fighting = [1, 1, 1, 2, 1, 1, 0.5, 0.5, 1, 1, 1,1, 1, 1, 2, 1, 1, 0.5, 2];
const flying = [1, 1, 0.5, 1, 1, 0, 2, 0.5, 1, 1, 1, 1, 0.5, 2, 1, 2, 1, 1, 1];
const poison = [1, 1, 0.5, 1, 0.5, 2, 1, 0.5, 1, 1, 1, 1, 0.5, 1, 2, 1, 1, 1, 0.5];
const ground = [1, 1, 1, 1, 0.5, 1, 0.5, 1, 1, 1, 1, 2, 2, 0, 1, 2, 1, 1, 1];
const rock = [1, 0.5, 2, 0.5, 0.5, 2, 1, 1, 1, 2, 0.5, 2, 2, 1, 1, 1, 1, 1, 1];
const bug = [1, 1, 0.5, 2, 1, 0.5, 2, 1, 1, 1, 2, 1, 0.5, 1, 1, 1, 1, 1, 1];
const ghost = [1, 0, 0, 1, 0.5, 1, 1, 0.5, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1];
const steel = [1, 0.5, 2, 0.5, 0, 2, 0.5, 0.5, 1, 0.5, 2, 1, 0.5, 1, 0.5, 0.5, 0.5, 1, 0.5];
const fire = [1, 1, 1, 1, 1, 2, 2, 0.5, 1, 0.5, 0.5, 2, 0.5, 1, 1, 0.5, 1, 1, 0.5];
const water = [1, 1, 1, 1, 1, 1, 1, 1, 1, 0.5, 0.5, 0.5, 2, 2, 1, 0.5, 1, 1, 1];
const grass = [1, 1, 1, 2, 2, 0.5, 1, 2, 1, 1, 2, 0.5, 0.5, 0.5, 1, 2, 1, 1, 1];
const electric = [1, 1, 1, 0.5, 1, 2, 1, 1, 1, 0.5, 1, 1, 1, 0.5, 1, 1, 1, 1, 1];
const psychic = [1, 1, 0.5, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 0.5, 1, 1, 2, 1];
const ice = [1, 1, 2, 1, 1, 1, 2, 1, 1, 2, 2, 1, 1, 1, 1, 0.5, 1, 1, 1];
const dragon = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.5, 0.5, 0.5, 0.5, 1, 2, 2, 1, 2];
const dark = [1, 1, 2, 1, 1, 1, 1, 2, 0.5, 1, 1, 1, 1, 1, 0, 1, 1, 0.5, 2];
const fairy = [1, 1, 0.5, 1, 2, 1, 1, 0.5, 1, 2, 1, 1, 1, 1, 1, 1, 0, 0.5, 1];

// List of all the type lists that are above
const labels = [typeless, normal, fighting, flying, poison, ground, rock, bug, ghost, steel, fire, water, grass, electric, psychic, ice, dragon, dark, fairy];