let yas = 30;

if (true) {
    let yas = 60;
    console.log("İçerideki:", yas); // İçerideki: 60

    if (true) {
        let yas = 50,
            ad = "Samet",
            cantest = "Hello";
        console.log("İçeridekinin İçindeki: ", yas, ad, cantest)    // İçeridekinin İçindeki:  50 Samet Hello
    }
}

console.log("En dıştaki:", yas);    // En dıştaki: 30

