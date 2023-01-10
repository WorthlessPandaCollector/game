const config = require("../config/config");
const plate = require("../equipment/plate");
const warhammer = require("../weapons/warhammer");
const Character = require("./character");


class Warrior extends Character {
    constructor(name) {
        super(name, config.classNames.WarriorClassName, 175, 0, 8, 11, 7, 9, 3, 3, 9, 6, 5);
        this.name = name;

        this.equipment.push(plate);
        this.weapons.push(warhammer);

    }
}


module.exports = Warrior;

