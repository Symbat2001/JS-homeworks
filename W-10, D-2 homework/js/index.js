// 1 тапсырма //

let course = +prompt("Курсынызды енгизиниз: 1/2/3/4");
let isAlmaty = prompt("Сиз Алматыдан келгенсизбе? ия/жок");
        
if(course<3 && isAlmaty=="жок"){
    alert("Куттыктаймыз! Сизге жатакханадан орын бериледи!");
}
else{
    alert("Окинишке орай сизге Жатакханадан орын берилмейди:((");
}

// 2 тапсырма //

alert("Ойын шарты:Дурыс жауап берилген ар суракка 1 балл бериледи.")

let score = 0;
// 1 сурак //
let surak1 = prompt("Казакстаннын тауелсиздик алган жылы?");
if(surak1 == "1991"){
    score += 1;
}
// 2 сурак //
let surak2 = prompt("Казир окып жаткан каласы? Алматы +1/ Баска кала -1");
if(surak2 == "Almaty" || surak2 == "Алматы"){
    score += 1;
}

alert("Сиздин жинаган баллыныз: " + score);

