// let email = "sametongelci@gmail.com";
let email = 'sametongelci@gmail.com';
console.log(email);


// BİRLEŞTİRME - Join two or more string

let ad = "Samet",
    soyad = "Töngelci",
    adSoyad = ad + " " + soyad;
console.log(adSoyad);
console.log(adSoyad[1]);    // a

// Kaç Karakter - Length
console.log(adSoyad.length);


// STRING METHODS
console.log(adSoyad.toUpperCase());   // SAMET TÖNGELCI

let kucukAdSoyad = adSoyad.toLowerCase();
console.log(kucukAdSoyad);  // samet töngelci


// Kaçıncı İndexte Bulunduğu  - indexOf
let index = adSoyad.indexOf("e");
console.log(index);     // 3
let indexLast = adSoyad.lastIndexOf("e");
console.log(indexLast);     // 10


// Slice Kullanımı
let ilkİsim = adSoyad.slice(0, 5);
console.log(ilkİsim);

// Replace

let soyadReplace = "Töngelci AAAA",
    adsoyadReplace = ad + " " + soyadReplace,
    yerdegistir = adsoyadReplace.replace(" ", "");
console.log(yerdegistir);       // SametTöngelci AAAA

// Replace ALL

let yerdegistirAll = adsoyadReplace.replaceAll(" ", "");
console.log(yerdegistirAll);    // SametTöngelciAAAA