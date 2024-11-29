//  1 tapsyrma

let san = [1, 2, 3, 4, 5]
let even =[]
let qubtau = san.map(num=> num ** 3)
for (let num of qubtau) {
   if (num % 2 == 1) {
    even.push(num);
   }
}
console.log("Taq sandar:", even);
console.log("Kubtalgan sandar:", qubtau);


// 2 tapsyrma

let baga = +prompt("Студент санын енгиз:")
let bagalar = []
for (let i = 0; i < baga; i++) {
    let qorytyndy = +prompt((i+1) + "-ши студенттини багасын енгиз:")
    bagalar.push(qorytyndy)
}
let total = bagalar.reduce((sum.qorytyndy)) 


// истей алмадым :(((
