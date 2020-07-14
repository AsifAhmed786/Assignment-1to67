// Task 1
var a = 10
document.write("<p>Result:</p>");
document.write("<p>The value is a: "+a+"</p>");
document.write("<br>");
document.write("<p>The value of ++a is: "+ ++a +"</p>")
document.write("<p>Now the value of a is: "+a+"</p>");
document.write("<br>");
document.write("<p>The value of a++ is: "+ a++ +"</p>");
document.write("<p>Now the  vlue of a is: "+a+"</p>");
document.write("<br>");
document.write("<p>The value of --a is: "+ --a +"</p>");
document.write("<p>Now the value of a is: "+a+"</p>");
document.write("<br>");
document.write("<p>the value of a-- is: "+ a-- +"</p>");
document.write("<p>Now the value of a is: "+a+"</p>");
document.write("<br><br>");


// Task 2
var a = 2; b=1;
var result = --a - --b + ++b + b--;
document.write("<p>a is: "+a+"</p>")
document.write("<p>b is: "+b+"</p>")
document.write("<p>result is: "+result+"</p>")
document.write("<br><br>");


//Task 3
var name = prompt("Please enter your name")
alert("Welcome to the Js world Mr."+name)
document.write("<br><br>");


// Task 5
var tableNumber = +prompt("Please enter table number to print table")
// document.write(tableNumber)
for (var i = 0;i<10;i++){
    if( tableNumber===0){
        document.write(5+" X "+ (i+1) + " = "+((i+1)*5)+"<br>")
    }
    else{
        document.write(tableNumber+" X "+ (i+1) + " = "+((i+1)*tableNumber)+"<br>")
    }    
}
document.write("<br><br>");



// Task 6
var sub1 = prompt("Enter name of first subject")
var sub1Marks = +prompt("Please Etner marks of "+sub1)
var sub2 = prompt("Enter name of second subject")
var sub2Marks = +prompt("Please Etner marks of "+sub2)
var sub3 = prompt("Enter name of third subject")
var sub3Marks = +prompt("Please Etner marks of "+sub3)
var totalMarks = 100
document.write("<table border=1px>");
document.write("<tr>");
document.write("<th>Subject</th>");
document.write("<th>Total Marks</th>");
document.write("<th>Obtained Marks</th>");
document.write("<th>Percentage</th>");
document.write("</tr>");
document.write("<tr>");
document.write("<td>"+sub1+"</td>");
document.write("<td>"+totalMarks+"</td>");
document.write("<td>"+sub1Marks+"</td>");
document.write("<td>"+ ((sub1Marks/totalMarks)*100) +"%</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td>"+sub2+"</td>");
document.write("<td>"+totalMarks+"</td>");
document.write("<td>"+sub2Marks+"</td>");
document.write("<td>"+ ((sub2Marks/totalMarks)*100) +"%</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td>"+sub3+"</td>");
document.write("<td>"+totalMarks+"</td>");
document.write("<td>"+sub3Marks+"</td>");
document.write("<td>"+ ((sub3Marks/totalMarks)*100) +"%</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td></td>");
document.write("<td>"+(totalMarks*3)+"</td>");
document.write("<td>"+(sub1Marks+sub2Marks+sub3Marks)+"</td>");
document.write("<td>"+(((sub1Marks+sub2Marks+sub3Marks)/(totalMarks*3))*100)+"%</td>");
document.write("</tr>");
document.write("</table>");
document.write("<br><br>");




