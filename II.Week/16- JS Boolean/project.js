console.log(true, false, "true", "false");

// Include Kullanımı

let email = "sametongelci@gmail.com";
let varmi = email.includes('s');
console.log(varmi);     // true
let varmi2 = email.includes('z');
console.log(varmi2);    // false


// Operatörler

let yas = 31;
console.log(yas == 31);     // true
console.log(yas == 32);     // false
console.log(yas != 25);     // true
console.log(yas > 31);      // false
console.log(yas >= 31);     // true
console.log(yas < 31);      // false
console.log(yas <= 31);     // true


let ad = "samet";
console.log(ad == "samet"); // true
console.log(ad == "Samet"); // false

console.log(ad > "Damet");  // TRUE
    // (because of the unicode sort order) -  Because "a" IS > than "A" in ASCII and lower end UTF8

