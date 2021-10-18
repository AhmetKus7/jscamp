console.log("Merhaba kodlama.io")

// Js tip güvenliği yok. 
let dolarBugun = 9.30

let dolarDun = 9.20

{
    let dolarDun =9.10
}
console.log(dolarDun)

const euroDun = 11.2
//euroDun = 11

console.log(euroDun)
//Array= diziler köşeli parantez
//camelCasing = kelime baş küçük son büyük
//PascalCasing = C# da başı büyük
let konutKredileri = ["Konut Kredisi","Emlak Konut Kredisi", "Kamu Konut Kredisi","Özel Konut Kredisi"]

console.log("<ul>")
for(let i = 0;i<konutKredileri.length;i++){
    console.log("<li>"+konutKredileri[i]+"</li>")
}
console.log("</ul>")

console.log(konutKredileri)

