const Mage = require("./characters/mage");
const Warlock = require("./characters/warlock");
const Warrior = require("./characters/warrior");
const Pet = require("./characters/pet");
const fireball = require("./spells/fireball");
const prompt = require("prompt-promise");
const config = require("./config/config");
const mobs = require("./mobs/mobs");


async function gameLoop() {
    let character;
    // name your character
    const charName = await prompt("Character name:");
    // choose your class

    const characterClass = await prompt(`Pick your Class, ${charName}: mage, warlock, warrior. \n `); 
        if(characterClass === config.classNames.MageClassName) {
            character = new Mage(charName);
        }
        else if (characterClass === config.classNames.WarlockClassName) {
            character = new Warlock(charName);
        }
        else if (characterClass === config.classNames.WarriorClassName) {
            character = new Warrior(charName);
        } else {
            throw Error("undefined class");
        }
        // spawn random mob
        // randomIndex = Math.floor(Math.random() * mobs.length);
       
        let counter = 0;
        let mob = mobs[counter]; // [0] is hrn, [1] is angrysapling


        console.log("\n=======|A wild " + mob.name + " appears |=======");
        console.log("=======| " + mob.name + " has " + mob.health + " health |======");
        console.log("\n");



        while (character.health > 0 && mob.health > 0) {
            
            console.log("You character has the following abilities:\nSpells: ", character.spells, "\nWeapons: ", character.weapons, "\nPets:", character.pets, "\nActiveWeapon", character.activeWeapon, "\nActivePet", character.activePet);
            const choice = await prompt("\nChoose: | attack | equip | summon | pet attack | spell |\n");
           
            if(choice == "spell") {

                const spellList = character.spells.map(spell => spell.name);
                const spellSelect = await prompt("Choose from spells [" + spellList + "]\n");
                    if (spellSelect != spellList){
                        throw Error("u suck");
                }
                    else {
                        const damage = character.getDamage(spellSelect);
                        const mobDamage = mob.damage;
                        mob.health -= damage;
                        character.health -= mobDamage;
                        console.log(character.name, "takes ", mobDamage, " damage ||", character.health, " health remaining.");
                        console.log(mob.name, "takes ", damage, " damage ||", mob.health, " health remaining.");
                        console.log(`Remaining mana: ${character.mana}`);
                }

            } else if(choice == "attack") { 
                
                if(character.activeWeapon === null){
                    console.log("no weapon equipped");
                }
                else {
                    const activeWeapon = character.activeWeapon.name;
                    const damage = character.getDamage(activeWeapon);

                    const mobDamage = mob.damage;
                    mob.health -= damage;
                    character.health -= mobDamage;
                    console.log(character.name, "takes ", mobDamage, " damage ||", character.health, " health remaining.");
                    console.log(mob.name, "takes ", damage, " damage ||", mob.health, " health remaining.");
                }


            } else if(choice == "equip") {
                
                const weaponNames = character.weapons.map(weapon => weapon.name);
                const weaponSelect = await prompt(`Choose your weapon: \n[${weaponNames}]\n `);
                character.useWeapon(weaponSelect);
                const mobDamage = mob.damage;
                character.health -= mobDamage;
                console.log(character.name, "takes ", mobDamage, " damage ||", character.health, " health remaining.");
                console.log("Next turn.")

            } else if(choice == "summon"){
                
                const petList = character.pets.map(pet => pet.name);
                const petSelect = await prompt("Choose from pets [" +petList + "]\n");
                character.summonPet(petSelect);
                const mobDamage = mob.damage;
                character.health -= mobDamage;
                console.log(character.name, "takes ", mobDamage, " damage ||", character.health, " health remaining.");

                console.log("Next turn.")


            } else if(choice == "pet attack"){
                
                    if(character.activePet === null){
                        console.log("no pet summoned")
                }


            else {
                    const activePet = character.activePet.name;
                    const damage = character.getDamage(activePet);
                    const mobDamage = mob.damage;
                    mob.health -= damage;
                    character.health -= mobDamage;
                    console.log("\n",character.name, "takes ", mobDamage, " damage ||", character.health, " health remaining.");
                    console.log(mob.name, "takes ", damage, " damage ||", mob.health, " health remaining.");
                }

            }

            if (character.health < 0) {
                console.log("test");
            }

            if (mob.health <= 0  && character.health > 0) {
                character.levelUp();
                console.log("Congrats, you are now level ", + character.level);
 // stuck on figuring out how to loop this with a new mob ...

            }


            }


        }
            
    

    
    

gameLoop();