import inquirer from "inquirer";
import {question1, question2} from "./questions.js";

class Pets {
    constructor(name) {
        this.name = name;
        this.hunger = 10;
        this.thirst = 10;
        this.boredom = 10;
        this.alive = true;
        this.win = false;
    };

    feed () {
        this.hunger --;
        this.thirst ++;
        console.log(`You fed ${this.name}. Hunger down! Thirst increased!`);
        this.statusCheck();
        this.deathCheck();
    };

    drink () {
        this.thirst --;
        this.boredom ++;
        console.log(`You gave ${this.name} a drink. Thirst down! Boredom increased!`);
        this.statusCheck();
        this.deathCheck();
    };

    play () {
        this.boredom --;
        this.hunger ++;
        console.log(`You played a game of catch with ${this.name}. Boredom down! Hunger increased!`);
        this.statusCheck();
        this.deathCheck();
    };

    statusCheck () {
        if (this.thirst >= this.thirstLimit - 2) {
            console.log(`${this.name} is very thirsty!`);
        };
        if (this.boredom >= this.boredomLimit - 2) {
            console.log(`${this.name} is very bored!`);
        };
        if (this.hunger >= this.hungerLimit - 2) {
            console.log(`${this.name} is very hungry!`);
        };
    }

    deathCheck () {
        if (this.hunger == this.hungerLimit || this.thirst == this.thirstLimit || this.boredom == this.boredomLimit) {
            this.alive = false;
        };
    };

    winCheck () {
        if (this.hunger == 0 || this.thirst == 0 || this.boredom == 0) {
            this.win = true;
        };
    };
};

class HungryHungryHelicopter extends Pets {
    constructor(name,) {
        super(name);
    };
    hungerLimit = 12;
    thirstLimit = 15;
    boredomLimit = 17;
};

class GeniusSloth extends Pets {
    constructor(name,) {
        super(name);
    };
    hungerLimit = 15;
    thirstLimit = 17;
    boredomLimit = 12;
};

let pet

class ParchedCamel extends Pets {
    constructor(name) {
        super(name);
    }
    hungerLimit = 16;
    thirstLimit = 11;
    boredomLimit = 16;
}

const init = async () => {
    let response = await inquirer.prompt(question1);
    if (response.pet == "Hungry hungry helicopter") {
        pet = new HungryHungryHelicopter(response.name);
    } else if (response.pet == "Genius sloth") {
        pet = new GeniusSloth(response.name);
    } else if (response.pet == "Parched camel") {
        pet = new ParchedCamel(response.name);
    }

    gameLoop();
  }


const gameLoop = async () => {
    let response = await inquirer.prompt(question2);
    if (response.action == "Feed") {
        pet.feed();
        pet.deathCheck();
        pet.winCheck();
        if (!pet.alive) {
            console.log(`Oh no ${pet.name} died of thirst. You monster!`)
        } else if (pet.win) {
            console.log(`${pet.name} has reached true fullness, you win!`)
        } else {
            gameLoop();
        };
    } else if (response.action == "Drink") {
        pet.drink();
        pet.deathCheck();
        pet.winCheck();
        if (!pet.alive) {
            console.log(`Oh no ${pet.name} died of boredom. You boring monster!`)
        } else if (pet.win) {
            console.log(`${pet.name}\'s thirst has been fully quenched, you win!`)
        } else {
            gameLoop();
        };
    } else if (response.action == "Play") {
        pet.play();
        pet.deathCheck();
        pet.winCheck();
        if (!pet.alive) {
            console.log(`Oh no ${pet.name} died of hunger. You monster!`)
        } else if (pet.win) {
            console.log(`${pet.name} has reached true happiness, you win!`)
        } else {
            gameLoop();
        };
    };
};

init()
