/*
Task 4:
Given let age = 20 and let hasLicense = true;, write code that logs "Can drive" only if both conditions are true:

Age is greater than or equal to 18

Has license is true

✔️ Operators Used: >=, &&
*/

let age = 20;
let hasLicense = true;

if (age >= 18 && hasLicense) {
  console.log(`Eligible for Drive`);
} else {
  console.log(`Not Eligible for drive`);
}
