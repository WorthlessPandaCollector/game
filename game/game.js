const Mage = require("./characters/mage");
const Warlock = require("./characters/warlock");
const Warrior = require("./characters/warrior");
const Pet = require("./characters/pet");
const fireball = require("./spells/fireball");
const prompt = require("prompt-promise");





const warlock = new Warlock("Warlock McWarlockface");
const mage = new Mage ("Mage McMagerson");
const warrior = new Warrior ("Warrior McWarriorson");

// choose a class with prompt