const Character = require("./character");
const Pet = require("./pet");
const drain = require("../spells/drain");
const robe = require("../equipment/robe");
const wand = require("../weapons/wand");



class Warlock extends Character {
    constructor(name, pets){
        super(name, "Warlock", 80, 100, 8, 3, 4, 4, 9, 9, 4, 5, 5);
       

        this.pets.push(new Pet("Imp", 5));
        this.spells.push(drain);
        this.equipment.push(robe);
    }
    addPet(name, damage) {
        this.pets.push(new Pet(name, damage));
    }
}

module.exports = Warlock;
