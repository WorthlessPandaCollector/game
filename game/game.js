const Mage = require("./characters/mage");
const Warlock = require("./characters/warlock");
const Warrior = require("./characters/warrior");
const Pet = require("./characters/pet");
const fireball = require("./spells/fireball");





const warlock = new Warlock("Warlock McWarlockface");
const mage = new Mage ("Mage McMagerson");
const warrior = new Warrior ("Warrior McWarriorson");


warlock.summonPet("Imp");
mage.useSpell("fireball");
warrior.useWeapon("Warhammer");

warlock.levelUp();
mage.levelUp();
warrior.levelUp();
warlock.levelUp();
mage.levelUp();
warrior.levelUp();
console.log(warlock);

warlock.levelUp();


console.log(warlock);
mage.levelUp();
warrior.levelUp();
warlock.levelUp();
mage.levelUp();
warrior.levelUp();
warlock.levelUp();
mage.levelUp();
warrior.levelUp();




console.log("warrior dmg:", warrior.getDamage());
console.log("mage dmg:", mage.getDamage());
console.log("warlock dmg:", warlock.getDamage());
