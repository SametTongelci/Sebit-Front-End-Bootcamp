function hello() {
    console.log("Hello");
}

// hello();
// hello();
// hello();


// Fonksiyonlara parametre gönderme

const samet = function (ad = "Samet", soyad = "Töngelci") {
    console.log(`Ad Soyad ${ad} ${soyad}`);
}

samet("Can", "Boz");
samet();    // Default olarak belirlediğimiz parametreleri yazdırır



// Eski tip function
const karealani = function (kenar) {
    return kenar * kenar;
}

let sonuc = karealani(6);
console.log(sonuc);



// ARROW İlk versiyon


    // const karealanim = (kenar) => {
    //     return kenar ** 2;
    // }


// Tek parametreyse parantez kullanmaya gerek yok

    // const karealanim = kenar => {
    //     return kenar ** 2;
    // }

const karealanim = kenar => kenar ** 2;
console.log(karealanim(7));


    // const donus = () => {
    //     return "Samet";
    // }

const stringDonus = () => "Samet";
console.log(stringDonus());

/*
UYGULAMA

Ürünlerin ham fiyatını verip vergili halinin toplamını bulun hesaplama yapmak:
*/

const urunSatis = function (urunler, vergi) {
    let toplam = 0;
    for (let i = 0; i < urunler.length; i++) {
        toplam += urunler[i] + urunler[i] * vergi;
    }
    return toplam;
}
console.log(urunSatis([10, 20, 30], 0.25))      // 75


// Aynı fonksiyonu Arrow Fonksiyon yapma
const urunSatisArrow = (urunler, vergi) => {
    let toplam = 0;
    for (let i = 0; i < urunler.length; i++) {
        toplam += urunler[i] + urunler[i] * vergi;
    }
    return toplam;
}
console.log(urunSatisArrow([10, 20, 30], 0.25))

