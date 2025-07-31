/*
let a = "10";
let b = 10;
✅ Check if a and b are equal using both:

== (loose equality)

=== (strict equality)

👉 Log:

"Equal with ==" if true for ==

"Equal with ===" if true for ===

Otherwise, log "Not equal"
*/

let a = "10";
let b = 10;

if (a === b) {
  console.log("Equal with ===");
} else if (a == b) {
  console.log("Equal with ==");
} else {
  console.log("Not equal");
}
