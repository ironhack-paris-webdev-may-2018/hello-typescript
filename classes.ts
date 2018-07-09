// Interfaces: a TYPE that describes the structure of an object
interface WarriorInterface {
  // interfaces contains the structure of the object (properties)
  health: number;
  strength: number;

  // and the SIGNATURE of the methods (name & parameters only)
  receiveDamage(dmg: number);
}

// Error: You can't use an interface to CREATE an object
// const myWarrior = new WarriorInterface();


// ------------------------------------------

class Soldier implements WarriorInterface {
  // structure of the objects
  // health: number;
  // strength: number;

  // logic for when they are created
  constructor(
    public health: number,
    public strength: number
  ) {
    // this.health = health;
    // this.strength = strength;
  }

  // methods
  receiveDamage(dmg: number) {
    this.health -= dmg;
  }
}

const rambo = new Soldier(400, 100);
console.log(rambo.health);


// ------------------------------------------

class Viking implements WarriorInterface {
  constructor(
    public name: string,
    public health: number,
    public strength: number
  ) { }

  receiveDamage(dmg: number) {
    this.health -= dmg;
    console.log("FOR ODIN!");
  }
}

const ragnarr = new Viking("Ragnarr the Reaper", 200, 25);
console.log(ragnarr.name);


// ------------------------------------------

class Amazon implements WarriorInterface {
  constructor(
    public magicWeapon: string,
    public health: number,
    public strength: number
  ) { }

  receiveDamage(dmg: number) {
    this.health -= dmg;
    console.log(`My ${this.magicWeapon} will crush you!`);
  }
}

const diana = new Amazon("Shield of Athena", 245, 30);
console.log(diana.magicWeapon);

// ------------------------------------------

class Painter {
  constructor(
    public health: number,
    public style: string
  ) { }
}

const dali = new Painter(50, "surrealist");

// ------------------------------------------

function fight(warriorA: WarriorInterface, warriorB: WarriorInterface) {
  warriorA.receiveDamage(warriorB.strength);
  warriorB.receiveDamage(warriorA.strength);

  console.log(`After the fight: ${warriorA.health} vs. ${warriorB.health}`);
}

fight(diana, rambo);
fight(ragnarr, rambo);
// Error: Painter class doesn't have the WarriorInterface structure
// fight(diana, dali);
