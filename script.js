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
 