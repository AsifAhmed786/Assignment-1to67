// Task 1
var fname = prompt("Please enter your first name");
var lname = prompt ("Please enter your last name");
var fullName = (fname+" "+lname)
alert("Welcome to the site "+fullName)



// Task 2
var mobile = prompt("Please enter your favourite mobile phone model")
document.write("My favourite mobile phone is: "+mobile+"<br>");
document.write("Length of string is: "+mobile.length)
document.write("<br><br><br>")


// Task 3
var str = "Pakistani"
document.write("String: "+str+"<br>");
document.write("Index of 'n': "+str.indexOf("n"))
document.write("<br><br><br>")


// Task 4
var str1 = "Hello World"
document.write("String: "+str1+"<br>");
document.write("Last Index of 'l': "+str1.lastIndexOf("l"))
document.write("<br><br><br>")




// Task 5
var str = "Pakistani"
document.write("String: "+str+"<br>");
document.write("Character at index 3: "+str.charAt(3));
document.write("<br><br><br>")



// Task 6
var fname = prompt("Please enter your first name");
var lname = prompt ("Please enter your last name");
var fullName = fname.concat(" ",lname)
alert("Welcome to the site "+fullName)
document.write("<br><br><br>")



// Task 7
var city = "Hyderabad";
document.write("City: "+city+"<br>")
city = city.replace("Hyder","Islam")
document.write("After replacement: "+city+"<br>")
document.write("<br><br><br>")


// Task 8
var messages = "Ali and Sami are best friends. They play cricket and football together";
document.write(messages.replace(/and/g,"&"))
document.write("<br><br><br>")



// task 9
var numStr = "472";
var num = parseInt(numStr)
document.write("Value: "+numStr+"<br>")
document.write("Type: "+typeof(numStr)+"<br>")
document.write("Value: "+num+"<br>")
document.write("Type: "+typeof(num)+"<br>")
document.write("<br><br><br>")



// Task 10
var x = prompt("Please enter something for converting to uppercase")
document.write("User input: "+x+"<br>")
document.write("Upper  case: "+x.toUpperCase()+"")
document.write("<br><br><br>")



// Task 11

function title(string) {
    var text1 = string.toLowerCase().split(" ");
    for(var i = 0; i < text1.length; i++){
       text1[i] = text1[i][0].toUpperCase() + text1[i].slice(1);
    }
 return text1;
 }
var x = prompt("Please enter something for converting to title case")
var titleString = new String(title(x));
titleString = titleString.replace(/,/g," ");
document.write("User input: "+x+"<br>")
document.write("Title case: "+titleString+"")
document.write("<br><br><br>")



// Task 12
var num = 35.36;
var str1 = num.toString().replace(".","");
document.write("Number: "+num+"<br>");
document.write("Result: "+str1+"<br>");
document.write("<br><br><br>")



// Task 13
var str1 = prompt("Please enter username");
if(str1.indexOf("!")== -1 && str1.indexOf(",")==-1 && str1.indexOf(".")== -1 && str1.indexOf("@")== -1){
   // alert("Please enter proper username")
}
else{
   alert("Please enter a valid user name")
}      




// Task 14
var items = ["cake","apple pie","cookie","chips","patties"]
var userInput = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?")
for(var i = 0; i<items.length;i++){
   if(userInput===items[i]){
      alert("cookie is available at the index "+i+" in our bakery")
      break;
   }
   else{
      if(i+1 === items.length){
         alert("we are sorry. "+userInput+" is not available in our bakery");
      }
      

   }
}




// Task 15
var condition = false;
var pass = prompt("Pleaes enter passwor with following criteri:\nit should contain alphabets and numbers\nIt should not start with a number\nIt must at least 6 characters long")
if(pass.length>=6){
   alert("quantity is right "+pass.charCodeAt(pass[0]))
   if(pass.charCodeAt(0) <= 57){
      alert("Password cannot begin with a number")
   }
   else{
         for(var i = 0;i <pass.length;i++){
            if(pass.charCodeAt(i)<=57 && pass.charCodeAt(i)>=48){
               contition = true;
            }
            
         }  
         if(condition===true){
            alert("Password meets all criterias")
         }
         else{
            alert("Password must contains numbers and characters")
         } 

   }
}
else{
   alert("Please enter a valid password")
}



// Task 16
var university = "University of Karachi"
var uni = university.split("");
for(var i = 0; i < uni.length; i++){
   document.write(university[i]+"<br>")
}
document.write("<br><br><br>")




// Task 17
var x = prompt('Please enter word');
document.write("User input: "+x+"<br>");
document.write("Last character of input: "+x[x.length-1]+"<br>")
document.write("<br><br><br>")



// Task 18
var text = "The quick brown fox jumps over the lazy dog";
document.write("Text: "+text+"<br>");
var no1 = 0;
var arr1 = text.toLowerCase().split(" ");
for(var i = 0;i < arr1.length;i++){
   if(arr1[i] == "the"){
      no1++;
   }
}
document.write("There are "+no1+" occurence(s) of word 'the'")