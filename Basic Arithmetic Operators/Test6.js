/*
let age = 16;
let hasLicense = false;
let hasGuardianPermission = true;
```

👉 Write code that logs `"Can drive with supervision"` if:

* age is less than 18 **AND**
* has guardian permission is true

Otherwise, log "Cannot drive".
*/

let age = 16;
let hasLicense = false;
let hasGuardianPermission = true;

if (age < 18 && hasGuardianPermission) {
  console.log(`Can drive with supervision`);
} else {
  console.log("Cannot drive");
}
