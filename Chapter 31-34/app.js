// Task 1
var a = new Date();
document.write(a)
document.write("<br><br><br>")


// Task 2
var month = ["January","February","March","April","May","June","July","August","September","October","November","December"]
alert("Current month: "+month[a.getMonth()]);



// Task 3
var day = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
alert("Today is: "+day[a.getDay()].slice(0,3));



// Task 4
if(new Date().getDay()===0 ||  new Date().getDay()===6){
   alert("Its a Fun day")
}
else{

}



// Task 5
if(new Date().getDate()<16){
   document.write("First fifteen days of the month")
}
else{
   document.write("last fifteen days of the month")
}
document.write("<br><br><br>");




// Task 6
var date = new Date();
document.write("Current Date: "+date+"<br>");
document.write("Elapsed milliseconds since January 1, 1970: "+date.getTime()+"<br>")
document.write("Elapsed minutes since January 1, 1970: "+((date.getTime()/1000)/60/60)+"<br>")
document.write("<br><br><br>");




// Task 7
if(new Date().getHours()<12){
   document.write("Its AM")
}
else{
   document.write("Its PM")
}
document.write("<br><br><br>");




// Task 8
var laterDate = new Date("Dec 31, 2020");
document.write(laterDate+"<br>")
document.write("<br><br><br>");


// Task 9
var date1 = new Date("April, 25 2020");
date1m = date1.getTime();

var currentDate = new Date();
datecm = currentDate.getTime();

var differnece = (datecm-date1m)/1000 /60/60/24;
document.write(Math.round(differnece)+" days have passed since 1st Ramadan, 2020");
document.write("<br><br><br>");




// Task 10
var refDate = new Date("December, 05 2015");
var endDate = new Date("January, 1 2015");
var sec = (refDate.getTime()-endDate.getTime())/1000/60
document.write("On reference date "+refDate+",<br>");
document.write(sec+" secondshad passed since the begining of 2015")
document.write("<br><br><br>");



// Task 11
var date1 = new Date();
document.write("current date: "+date1+"<br>");
date1.setHours(date1.getHours()+1)
document.write("1 hour ago, it was "+date1);
document.write("<br><br><br>");


// Task 12
var date1 = new Date();
alert("current date: "+date1);
date1.setFullYear(date1.getFullYear()-100)
alert("100 years back it was "+date1);



// Task 13
var age = +prompt("Enter your age")
var date1 = new Date();
var year = date1.getFullYear()-age
document.write("Your age is "+age+"<br>")
document.write("Your birth year is "+year)
document.write("<br><br><br>");



// Task 14
var customerName = "Asif";
var currentMonth = "June";
var units = 410;
var pu = 16;
var surcharge = 350;
var netAmount = pu * units;
var grossAmount = netAmount + surcharge;

document.write("<h1>Kelectric Bill</h1>");
document.write("<br>");
document.write("<p>Month: "+currentMonth+"</p>");
document.write("<p>Number of Units: "+units+"</p>");
document.write("<p>Charges per unit: "+pu+"</p>");
document.write("<br>");
document.write("<p>Net Amount Payable (within Due Date): "+netAmount+"</p>");
document.write("<p>Late payment surcharge: "+surcharge+"</p>");
document.write("<p>Gross Amount Payable (after Due Date): "+grossAmount+"");

