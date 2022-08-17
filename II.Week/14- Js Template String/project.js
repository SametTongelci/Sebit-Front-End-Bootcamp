const varan1 = "Angular";
const varan2 = "React";
const varan3 = "Vue Js";

let sonuc = "Front-End'de öğrenmemiz gerekenler: " + varan1 + ", " + varan2 + ", " + varan3 + ".";
console.log(sonuc);

let sonucTemplate = `Front-End'de öğrenmemiz gerekenler: ${varan1}, ${varan2}, ${varan3}.`
console.log(sonucTemplate);


let html = `
<h1>${varan1}</h1>
<h2>${varan2}</h2>
<h3>${varan3}</h3>
`;
console.log(html);
