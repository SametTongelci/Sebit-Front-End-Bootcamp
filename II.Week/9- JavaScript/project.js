console.log("Merhaba")

/* JS değer tanımlama: var, let, const */

let gun = 30;
let ay = 6;
let yil = 1997;

    // let gun = 29; ERROR - ikinci defa tanımlanamaz
gun = 29;

console.log(gun, ay, yil);
console.log("Samet Töngelci " + gun + "/" + ay + "/" + yil + " tarihinde doğmuştur.");


const ikinciElAraba = 200000;
    // ikinciElAraba = 130000;  ERROR - const ile tanımlandığı için değiştirilemez
console.log(ikinciElAraba);

var a = 5;
var a = 3;  /*'var' ile aynı değeri tekrar tekrar tanımlayabiliriz */
console.log(a);

/* 'var' ile 'let' farkı */

var c = 5;
console.log("C değeri dışarda:", c);  // 5
{
    var c = 3;
    console.log("C değeri içerde:", c);  // 3
}
console.log("C değeri dışarda:", c);  // 3


let d = 5;
console.log("D değeri dışarda:", d);    // 5
{
    let d = 3;
    console.log("D değeri içerde:", d); // 3
}
console.log("D değeri dışarda:", d);  // 5