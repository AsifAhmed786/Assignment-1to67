// Task 1
var username = prompt("Please enter your city");
if (username === "Karachi") {
    alert("Welcome to the city of lights")

}


// Task 2
var gender = prompt("Please enter your gender")
if (gender === "male") {
    alert("Good Morning Sir")
}
else {
    if (gender === "female") {
        alert("Good Morning Madam")
    }
}

// Task 3
var signal = prompt("Please enter signal color for determining purpose");
if (signal === "Red") {
    alert("Must stop")
}
else {
    if (signal === "Yellow") {
        alert("Ready to Move")
    }
    else {
        if (signal === "Green") {
            alert("Move now")
        }
    }
}


// Task 4
var fuel = +prompt("Please enter remaining fuel")
if (fuel < 0.25) {
    alert("please refill the fuel in your car")
}


// Task 5
var a = 4; if (++a === 5) { alert("given condition for variable a is true"); }

var b = 82; if (b++ === 83) { alert("given condition for variable b is true"); }

var c = 12; if (c++ === 13) { alert("condition 1 is true"); } if (c === 13) { alert("condition 2 is true"); } if (++c < 14) { alert("condition 3 is true"); } if (c === 14) { alert("condition 4 is true"); }

var materialCost = 20000; var laborCost = 2000; var totalCost = materialCost + laborCost; if (totalCost === laborCost + materialCost) { alert("The cost equals"); }

if (true) { alert("True"); } if (false) { alert("False"); }

if ("car" < "cat") { alert("car is smaller than cat"); }



// Task 6
var sub1 = +prompt("Please enter marks of subject1")
var sub2 = +prompt("Please enter marks of subject2")
var sub3 = +prompt("Please enter marks of subject3")
var totalMarks = 300;
var marksObtained = sub1+sub2+sub3;
var perc = (marksObtained / totalMarks) * 100;
var grade = "";
var remarks = "";
if(perc>=80){
    grade = "A-one";
    remarks = "Excellent"
}
else{
    if(perc>=70){
        grade = "A";
        remarks = "Good"

    }
    else{
        if(perc>=60){
            grade = "B";
            remarks = "You need to improve";
        }
        else{
            if(perc<60){
                grade = "Fail"
                remarks = "Sorry"
            }
        }
    }
}


document.write("<h1>Marksheet</h1>");
document.write("<h4>Total Marks: "+totalMarks+"</h4>");
document.write("<h4>Marks Obtained: "+marksObtained+"</h4>");
document.write("<h4>Percentage: "+perc+"</h4>");
document.write("<h4>Grade: "+grade+"</h4>");
document.write("<h4>Remarks: "+remarks+"</h4>");


// Task 7
var secNumber = 10;
var guess = +prompt("Please guess what is the secret number")
if(guess===secNumber){
    alert("Bingo! Correct Answer")
}
else{
    if(guess===(secNumber+1)){
        alert("Close enough to the correct answer")
    }
}


// Task 8
var diviNumber = +prompt("Please enter number which is divisible by 3")
// alert(diviNumber/3)
if((diviNumber%3) === 0){
    alert("yes number is divisble by 3")
}
else{
    alert("no number is not divisble by 3")
}



// Task 9
var numberType = +prompt("Please enter number to check whehter even or odd")

if((numberType%2) === 0){
    alert("Number is Even")
}
else{
    alert("Number is odd")
}


// Task 10
var temp = +prompt("Please enter current temprature")
if(temp>40){
    alert("Its too hot outside")
}
else{
    if(temp>30){
        alert("The weather today is normal")
    }
    else{
        if(temp>20){
            alert("Today's weather is cool")
        }
        
        else{
            if(temp>10){
                alert("OMG! Today's weather is so cool")
            }
        }
    }
}



// Task 11
var firstNumber = +prompt("Enter First Number");
var secondNumber = +prompt("Eneter second number")
var oper = prompt("Please enter operator (+,-,*,/,%)")
if(oper==="+"){
    alert("Result of Addition is: "+(firstNumber+secondNumber))
}
else{
    if(oper==="-"){
        alert("Result of substraction is: "+(firstNumber-secondNumber))

    }
    else{
        if(oper==="*"){
            alert("Result of multiplication is: "+(firstNumber*secondNumber))

        }
        else{
            if(oper==="/"){
                alert("Result of division is: "+(firstNumber/secondNumber))

            }
            else{
                if(oper==="%"){
                    alert("Result of remainder is: "+(firstNumber%secondNumber))

                }
            }
        }
    }
}