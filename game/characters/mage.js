const Character = require("./character");
const fireball = require("../spells/fireball");
const frostbite = require("../spells/frostbite");
const robe = require("../equipment/robe");
const staff = require("../weapons/staff");
const config = require("../config/config");


class Mage extends Character {
    constructor(name) {
        super(name, config.classNames.MageClassName, 69, 130, 8, 3, 6, 4, 8, 11, 4, 5, 5);

    
        this.spells.push(fireball);
       // save for level 3 spell        this.spells.push(frostbite); 
        this.equipment.push(robe);
        this.weapons.push(staff);

    
    }
}

module.exports = Mage;
