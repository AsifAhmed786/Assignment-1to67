// Task1 
var num = +prompt("Please enter positive number");
document.write("number: "+num+"<br>")
document.write("round off value: "+Math.round(num)+"<br>")
document.write("round off value: "+Math.floor(num)+"<br>")
document.write("round off value: "+Math.ceil(num)+"<br>")
document.write("<br><br><br>")


// Task 2
var num = +prompt("Please enter negative number");
document.write("number: "+num+"<br>")
document.write("round off value: "+Math.round(num)+"<br>")
document.write("round off value: "+Math.floor(num)+"<br>")
document.write("round off value: "+Math.ceil(num)+"<br>")
document.write("<br><br><br>")


// Task 3
var a = -4;
document.write("The absolute value of "+a+" is "+Math.abs(a))
document.write("<br><br><br>")



// Task 4
var dice = Math.round(Math.random()*6);
document.write("random dice value: "+dice+"<br>")
document.write("<br><br><br>")



// Task 5
var coin = Math.ceil(Math.random()*2);
document.write(coin+"<br>")
if(coin===1){
   document.write("random coin value: Tails")
}
else{
   document.write("random coin value: Heads")
}
document.write("<br><br><br>")



// Task 6
var randNumber = Math.ceil(Math.random()*100);
document.write("random number between 1 and 100: "+randNumber+"<br>")
document.write("<br><br><br>")


// Task 7
var weight = prompt("Enter your weight in kilograms");
var weightf = 0.0
if(weight.slice(length-3,)==="kgs"){
   weightf = parseFloat( weight.slice(0,length-2))
   
}
else if(weight.slice(length-9,)==="kilograms"){
   weightf = parseFloat( weight.slice(0,length-8))
}
document.write("The weight of user is "+weightf+" kilograms");
document.write("<br><br><br>")



// Task 8
var num1 = Math.ceil(Math.random()*10);
var userNumber = +prompt("Enter a number between 1 and 10");
// document.write(num1)
if(num1===userNumber){
   alert("Congratulations your guess is correct the number is: "+num1)
}
else{
   alert("Try again!")
}