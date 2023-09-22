const userInput = prompt (
    "Enter a list of froyo flavors, seperate each with commas.",
    "vanilla, vanilla, vanilla, strawberry, coffee, coffee"
    );
    console.log(userInput);
 //dialogue box with string asking for flavors
 //user input box shows flavors seperated with commas

 const flavorString = userInput.split(',');
console.log(flavorString);
 // index flavors of froyo

 const flavorCounts= {};
 for (const item of flavorString) {
    if (flavorCounts[item]){
        flavorCounts[item]++;
    } else {
        flavorCounts[item] = 1;
    }
 }
 console.log(flavorCounts);
//log value of each key(flavor ordered)
 
console.table(flavorCounts);
 //table in console shows flavors and value(amount ordered)

 
