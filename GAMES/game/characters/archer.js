const config = require("../config/config");
const crossbow = require("../weapons/crossbow");
const Character = require("./character");

class Archer extends Character {
    constructor(name){
        super(name, config.classNames.ArcherClassName, 100, 0, 11, 6, 7, 12, 6, 0, 5, 5);
        this.name = name;

        this.weapons.push(crossbow);

    }
}

module.exports = Archer;