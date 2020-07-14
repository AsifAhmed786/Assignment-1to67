// Task 1
var inp = prompt("Please input something for identification")
// alert(inp.charCodeAt())
if(inp.charCodeAt()===65 || inp.charCodeAt()===90 ){
    alert("Upper Case Letter")
}
else if(inp.charCodeAt()===97 || inp.charCodeAt()===122 ){
    alert("lower Case Letter")
}
else{
    alert("not identified")
}
    
// Task 2
var a1 = +prompt("Enter First Number")
var a2 = +prompt("Enter second Number")
if (a1<a2){
    alert("larger number is "+a2)
}
else{
    alert("larger number is "+a1)
}


// Task 3
var a3 = +prompt("Please enter number to check positive negative or zero")
// alert((a3+6))
if(a3>0){
    alert("Number is positive")
}
else if (a3==0){
    alert("Number is equal to zero")
}
else{
    alert("Number is negative")
}


// Task 4
var a4 = prompt("Enter to check alphabet is vowel")
if(a4==="a" || a4==="e" || a4==="i" || a4==="o" || a4==="u" || a4==="A" || a4==="E" || a4==="I" || a4==="O" || a4==="U") {
    alert("True")
}
else{
    alert("False")
}


// Task 5
var pass1 = "4564Asif"
var pass2 = prompt("Please enter your Password")
if(pass2===""){
    alert("you have not entered any password")
}
else{
    if(pass1===pass2){
        alert("Correct the password you entered matches the original password")
    }
    else{
        alert("Incorrect Password")
    }
}

// Task 6
var greeting;
var hour = 13;

if (hour < 18) {
     greeting = "Good day"; 
}
else{
    greeting = "Good evening"; 
}
alert(greeting)