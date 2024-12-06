let classA = ["Амина","Адил","Алина"]
let classB = ["Берик","Бакыт","Баян"]
let classC = ["Амина","Адил","Алина","Берик","Бакыт","Баян"]

classC.unshift("Директор");
classC.push("Мугалим");
console.log(classC);


// 1 tapsyrma

let students = [
  {
    name: "Ali",
    age: 17,
    grades: {
        math: 85,
        english: 90,
        science: 80,
    },
    address: {
        city: "Almaty",
        street: "Abaya",
    }
   },
   {
    name: "Omar",
    age: 22,
    grades: {
        math: 80,
        english: 100,
        science: 94,
    },
    address: {
        city: "Astana",
        street: "Tauelsizdik"
    }
   }   
]
let {name,grades: {math}, address: {city}, country = "Qazaqstan"} = students[0];

console.log(`Name: ${name}`);
console.log(`Math Grade: ${math}`);
console.log(`City: ${city}`);
console.log(`Country: ${country}`);



