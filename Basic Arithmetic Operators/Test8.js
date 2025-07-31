/*
let math = 75;
let physics = 60;
let chemistry = 55;
✅ Write a program to check if:

The average of all subjects is greater than or equal to 60

AND no subject has less than 40

👉 Log "Passed" or "Failed"
*/

let math = 75;
let physics = 60;
let chemistry = 55;

let average = (math + physics + chemistry) / 3;

if (average >= 60 && math >= 40 && physics >= 40 && chemistry >= 40) {
  console.log("Passed");
} else {
  console.log("Failed");
}
