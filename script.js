const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"]
 }
 
console.log(adventurer.inventory); // Dot notation
console.log(adventurer["inventory"]); // Bracket notation

adventurer.inventory.forEach(item => console.log(item));

adventurer.companion = {
    name: "Leo",
    type: "Cat"
 };

 adventurer.companion.companion = {
    name: "Frank",
    type: "Flea",
    belongings: ["hat", "sunglasses"]
 };
 
//Method for rolling dice

 adventurer.roll = function(mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`);
 };
 
 class Character {
    constructor(name) {
       this.name = name;
       this.health = 100;
       this.inventory = [];
    }
    roll(mod = 0) {
       const result = Math.floor(Math.random() * 20) + 1 + mod;
       console.log(`${this.name} rolled a ${result}.`);
    }
 }
 
//Recreating Robin as an instance of the character class

 const robin = new Character("Robin");
 robin.inventory.push("sword", "potion", "artifact");
 
 robin.companion = new Character("Leo");
 robin.companion.type = "Cat";
 
 robin.companion.companion = {
    name: "Frank",
    type: "Flea",
    belongings: ["hat", "sunglasses"]
 };

 //Extending the Character class to create an Adventurer class

 class Adventurer extends Character {
    constructor(name, role) {
       super(name);
       this.role = role;
       this.inventory.push("bedroll", "50 gold coins");
    }
    scout() {
       console.log(`${this.name} is scouting ahead...`);
       this.roll();
    }