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
 