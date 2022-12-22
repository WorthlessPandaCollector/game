const Mage = require("./characters/mage");
const Warlock = require("./characters/warlock");
const Warrior = require("./characters/warrior");
const Pet = require("./characters/pet");
const fireball = require("./spells/fireball");
const prompt = require("prompt-promise");
const config = require("./config/config");
const mobs = require("./mobs/mobs");














// lets fighting love..

wins = true;

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

        randomInt = Math.floor(Math.random()*mobs.length);
        const healthyMob = mobs.filter(mobs => mobs.health > 0);
        let mob = healthyMob[randomInt];


        
        while(wins == true){
            
            const nextMob = mobs.filter(healthyMob => healthyMob.health > 0);
            randomInt = Math.floor(Math.random()*nextMob.length);
            mob = nextMob[randomInt];
            
            console.log("where is this ", nextMob)
            
            if(nextMob.length <= 0){
                console.log("YOU WIN! GameOver!");
                process.exit();
            }
            
            const wins = await letsFightingLove(character,mob);


            
            const cont = await prompt("CONT");

        }
        console.log("GAMEOVER");
        process.exit();

        }
    

async function letsFightingLove(character,mob){
        
        console.log("\n\n\n=======|A wild " + mob.name + " appears |=======");
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
                    console.log("\n\n\nno weapon equipped\n\n\n");
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
                const weaponSelect = await prompt(`Choose your weapon:    [${weaponNames}]\n `);
                character.useWeapon(weaponSelect);
                const mobDamage = mob.damage;
                character.health -= mobDamage;
                console.log("\n", character.name, "takes ", mobDamage, " damage ||", character.health, " health remaining.\n");
                console.log("Next turn.\n")

            } else if(choice == "summon"){
                
                const petList = character.pets.map(pet => pet.name);
                const petSelect = await prompt("Choose from pets [" +petList + "]\n");
                character.summonPet(petSelect);
                const mobDamage = mob.damage;
                character.health -= mobDamage;
                console.log("\n\n", character.name, "takes ", mobDamage, " damage ||", character.health, " health remaining.");

                console.log("\nNext turn.\n")


            } else if(choice == "pet attack"){
                
                    if(character.activePet === null){
                        console.log("\n\n\nno pet summoned\n\n\n")
                }


            else {
                    const activePet = character.activePet.name;
                    const damage = character.getDamage(activePet);
                    const mobDamage = mob.damage;
                    mob.health -= damage;
                    character.health -= mobDamage;
                    console.log("\n",character.name, "takes ", mobDamage, " damage ||", character.health, " health remaining.\n\n");
                    console.log("\n", mob.name, "takes ", damage, " damage ||", mob.health, " health remaining.\n");
                }

            }

            if (character.health <= 0) {
                
                console.log("You Lose");
                wins = false;
                return wins;
                
            }


            if (mob.health <= 0  && character.health > 0) {
                character.levelUp();
                console.log("Congrats, you are now level ", + character.level);
                wins = true;
                return wins;


            }




        }


    }
            
    

    
    

gameLoop();
