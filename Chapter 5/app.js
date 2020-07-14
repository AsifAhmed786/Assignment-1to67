// Task 1
var a = 5;
var b = 3;
document.write("Sum of "+a+" and "+b+" is "+(a+b))
document.write("<br><br>")


// Task 2
document.write("Subtraction of "+a+" and "+b+" is "+(a-b))
document.write("<br><br>")

document.write("Multipilication of "+a+" and "+b+" is "+(a*b))
document.write("<br><br>")


document.write("division of "+a+" and "+b+" is "+(a/b))
document.write("<br><br>")

document.write("modulus of "+a+" and "+b+" is "+(a%b))
document.write("<br><br>")


// Task 3
var abc;
document.write("Value after variable declaration is "+abc)
document.write("<br>")
abc = 5;
document.write("Initial Value "+abc)
document.write("<br>")
abc++;
document.write("Variable after increment is "+abc)
document.write("<br>")
abc +=7;
document.write("Variable after addition is "+abc)
document.write("<br>")
abc--;
document.write("Variable after decrement is "+abc)
document.write("<br>")
document.write("The remainder is "+abc%3)
document.write("<br><br><br><br>")



// Task 4
var ticketPrice = 600;
var qty = 5;
document.write("Total cost to buy "+qty+" tickets to a movie is "+ticketPrice*qty)
document.write("<br><br><br>")



// Task 5
var number = 4;
for(var i = 0; i<10 ; i++){
    document.write(number+" X "+(i+1)+" = "+ (number*(i+1))+"<br>")
}
document.write("<br><br><br>")


// Task 6
var celsius = 25;
var convF = (celsius * 9 / 5) + 32;
document.write(celsius+"<sup>o</sup>C is "+convF+"<sup>o</sup>F")
document.write("<br>")

var far = 70;
var convC = (far-32) * (5/9);
document.write(far+"<sup>o</sup>F is "+convC+"<sup>o</sup>C")
document.write("<br><br><br>")



// Task 7
var itemp1 = 650;
var itemp2 = 100;
var itemq1 = 3;
var itemq2 = 7;
var shipCharges = 100;
document.write("<h1>Shopping Cart</h1>");
document.write("<p>Price of Item 1 is "+itemp1+"</p>");
document.write("<p>Quantity of Item 1 is "+itemq1+"</p>");
document.write("<p>Price of Item 2 is "+itemp2+"</p>");
document.write("<p>Quantity of Item 2 is "+itemq2+"</p>");
document.write("<p>Shipping Charges is "+shipCharges+"</p>");
document.write("<br>");
document.write("<p>Total cost of your order is "+((itemp1*itemq1)+(itemp2*itemq2)+shipCharges)+"</p>");
document.write("<br><br><br>")




// Task 8
var totalMarks = 980;
var markObtained = 804;
document.write("<h1>Mark Sheet</h1>");
document.write("<br>");
document.write("<p>Total marks: "+totalMarks+"</p>");
document.write("<p>Marks obtained: "+markObtained+"</p>");
document.write("<p>Percentage: " +((markObtained/totalMarks)*100)+ "%</p>");
document.write("<br><br><br>")



// Task 9
var usd = 10;
var riyal = 25;
var usdRate = 104.80;
var riyalRate = 28;
var pkr = (usd*usdRate)+(riyal*riyalRate)
document.write("<h1>Currency in PKR</h1>");
document.write("<br>");
document.write("<p>Total Currency in PKR: "+pkr+"<p>");
document.write("<br><br><br>")



// Task 10
var b1 = 50;
var c1 = ((b1+5)*10)/2;
// document.write("<p>"+((b1+5)*10)/2)+"</p>");
document.write("<p>Result is: "+c1+"<p>");
document.write("<br><br><br>")

// Task 11
var currentYear = 2020;
var birthYear = 1980;
document.write("<h1>Age Calculator</h1>");
document.write("<br>");
document.write("<p>Current year: "+currentYear+"</p>");
document.write("<p>Birth year: "+birthYear+"</p>");
document.write("<p>Your age is: " +(currentYear-birthYear)+ "</p>");
document.write("<p>They are either "+(currentYear-birthYear)+" or "+((currentYear-birthYear)-1)+"</p>");
document.write("<br><br><br>")



// Task 13
var snack = "chocolate chip";
var cage = 15;
var maxAge = 65;
var perDay = 3;
var supply = ((maxAge-cage)*perDay);
document.write("<h1>The Lifetime Supply Calculator</h1>");
document.write("<br>");
document.write("<p>Favourite Snack: "+snack+"</p>")
document.write("<p>Current age: "+cage+"</p>")
document.write("<p>Estimate Maximum Age: "+maxAge+"</p>");
document.write("<p>Amount of snacks per day: "+perDay+"</p>");
document.write("<p>You will need "+supply+" "+snack+" to last you until the ripe old age of "+maxAge+"</p>");


