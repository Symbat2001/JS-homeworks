let num = +prompt("San zhaz");

for (let i = 1; i <= num; i++){
    if (i % 3 == 0 && i % 5 == 0) {
        if (i % 2 == 0) {
            console.log(i + "-3ke zhane 5 ke qaldyqsyz bolinedi zhane zhup san: Break!");
            break;
    }else{
        console.log("3 ke zhane 5 ke qaldyqsyz bolinedi" + i);
        
    }
    }
}
