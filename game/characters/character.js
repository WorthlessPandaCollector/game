
class Character {
    constructor(name, className, health, mana, power, str, dex, attack, int, magic, def, speed) {
        this.name = name;
        this.className = className;
        this.level = 1;
        this.health = health;
        this.mana = mana;
        this.power = power;
        this.strength = str;
        this.dexterity = dex;
        this.attack = attack;
        this.intelligence = int;
        this.magic =  magic;
        this.defense = def;
        this.speed = speed;
        this.spells = [];
        this.pets = [];
        this.equipment = [];
        this.weapons = [];
        this.activeSpell = null;
        this.activePet = null;
        this.activeWeapon = null;
    }

    levelUp() {
        this.level = this.level + 1;
    if(this.className === "Mage") {
        this.intelligence +=  4;
        this.health += 5;
        this.mana += 9;
        this.strength += 1;
        this.dexterity += 1;
        this.magic += 4;
        this.defense += 1;
        this.attack += 1;
    } else if(this.className === "Warlock") {
        this.intelligence += 4;
        this.health += 5;
        this.mana += 9;
        this.strength += 1;
        this.dexterity += 1;
        this.magic += 4;
        this.defense +=1;
        this.attack += 2;
    } else if(this.className === "Warrior") {
        this.intelligence = this.intelligence + 1;
        this.health += 13;
        this.mana += + 0;
        this.strength += 4;
        this.dexterity += 2;
        this.magic += 1;
        this.defense += 2;
        this.attack += 5;
        }
    }


    useSpell(spellName) {
        for(let i = 0; i < this.spells.length; i++) {
            const spell = this.spells[i];
            if (spell.name === spellName) {
                this.activeSpell = spell;
            }
        }
    }

    summonPet(petName) {
        for(let i = 0; i < this.pets.length; i++) {
            const pet = this.pets[i];
            if (pet.name === petName) {
                this.activePet = pet;
            }
        }
    }

    addWeapon(weapon) {
        this.weapons.push(weapon);

    }

    useWeapon(weaponName) {
        for(let i = 0; i < this.weapons.length; i++) {
            const weapon = this.weapons[i];
            if (weapon.name === weaponName) {
                this.activeWeapon = weapon;
            }
        }
    }
    

    getDamage() {
        if(this.activePet) {
            const petDamage = this.activePet.damage;
            const magicDamage = this.magic;
            return petDamage + magicDamage;
        }
        if(this.activeSpell) {
            const spellDamage = this.activeSpell.power;
            const magicDamage = this.magic;
            return spellDamage + magicDamage;
        }
        if(this.activeWeapon) {
            const weapDamage = this.activeWeapon.damage;
            const attackDamage = this.attack;
            return weapDamage + attackDamage;
        }
        else {
            const attDamage = this.attack;
            return attDamage;
        }
    }

    


}



module.exports = Character;

