/*
let temperature = 30;
let isRaining = false;
✅ Log:

"Stay indoors" if it’s raining or temperature is above 40

Otherwise, log "Go outside"

Use a ternary operator to do this in one line.
*/

let temperature = 30;
let isRaining = false;

console.log(`${temperature > 40 || isRaining ? "Stay indoors" : "Go outside"}`);
