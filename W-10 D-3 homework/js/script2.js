let num = prompt("0-99 арасындагы санды енгиз")

if(num>=0 && num<=9){
    alert(" Биринши сан: " + num)
}
else if(num>=10 && num<=99){
    alert("Биринши сан: " + parseInt(num / 10) + "\n Екинши сан: " + (num % 10)) 
}
else{
    alert("Енгизилген сан талапка сай емес!")
}