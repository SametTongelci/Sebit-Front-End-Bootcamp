let sayi = "31";
console.log(sayi + 1);   // 311
console.log(typeof sayi);    // string

sayi = Number(sayi)
console.log(sayi + 1); // 32
console.log(typeof sayi);    // number

// == VS ===
let yas = "30";
console.log(yas == 30);     // true
console.log(yas == "30");   // true
console.log(yas === 30);    // false
console.log(yas === "30");  // true

