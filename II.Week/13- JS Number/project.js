let yaricap = 15;
const piSayisi = 3.14;

let daireAlani = piSayisi * yaricap ** 2;
console.log(daireAlani);

let kalan = yaricap % 4;
console.log(kalan);

let sonuc = 6 * (15 - 4) ** 2;
console.log(sonuc);

// Sayı Arttırma
let sayi = 13; 
// sayi = sayi + 1;

// sayi++  vs ++ sayi Arasındaki FARK !

let sayim = sayi++;
console.log("Sayim: ", sayim);  // 13
let sayimYeni = ++sayi;
console.log("Sayim Yeni: ", sayimYeni);     // 15
// console.log(sayi);


// NaN Kullanımı

console.log(15 / 4);
console.log(15 * "Samet"); // Not A Number

let birlestirme = "Dersi " + sayi + " kere tekrar ettim.";
console.log(birlestirme);

