const isim = ['samet', 'can', 'rıdvan'];
console.log(isim);
console.log(isim[0]);

isim[2] = "osman";
console.log(isim);

let yaslar = [43, 5, 6, 30];
console.log(yaslar[3]);

let random = ['samet', 'tongelci', 25, 10];
console.log(random);


// Dizi Eleman Sayısı
console.log(random.length);

let isimler = ["samet", "can", "rıdvan"];

// JOIN
let tireli = isimler.join("-");
console.log(tireli);    // samet-can-rıdvan

let virgullu = isimler.join(", ");
console.log(virgullu);      // samet, can, rıdvan

let sira = isimler.indexOf("rıdvan");
console.log(sira);  // 2


// Concat Methodu - Ana dizi değişmiyor !
let eklenmis = isimler.concat(["osman", "merve"]);
console.log(eklenmis);  // (5) ['samet', 'can', 'rıdvan', 'osman', 'merve']
console.log(isimler);   // (3) ['samet', 'can', 'rıdvan']


// PUSH - sona eleman ekler ve ana dizi değişir
isimler.push('leyla')
console.log(isimler);   // (4) ['samet', 'can', 'rıdvan', 'leyla']


// POP - son elemanı siler
isimler.pop();  // son elemanı siler
console.log(isimler);