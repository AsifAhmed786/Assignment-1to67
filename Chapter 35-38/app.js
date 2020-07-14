// Task 1
function abc() {
   document.write(new Date())

}
abc();
document.write("<br><br><br>")



// Task 2
function userName(fname, lname) {
   alert("Welcom Mr. " + fname + " " + lname)
}
userName("Asif", "Ahmed")


// Task 3
var num1 = +prompt("Please enter first number for sum")
var num2 = +prompt("Please enter first number for sum")
function sum1(num1a, num2a) {
   alert("Sum of two numbers is " + (num1a + num2a))
}
sum1(num1, num2);



// Task 4
function calc(num1a, num2a, operator1) {
   var result = 0;
   if (operator1 === "+") {
      result = num1a + num2a;
   }
   else if (operator1 === "-") {
      result = num1a - num2a;
   }
   else if (operator1 === "*") {
      result = num1a * num2a;

   }
   return result;
}
var num1 = +prompt("Please enter first number for calculations");
var ope = prompt("Please enter operator + - *");
var num2 = +prompt("Please enter second number for calculations");
alert(calc(num1, num2, ope));



// Task 5
function sqrr(num1a) {
   return Math.sqrt(num1a);
}
alert(sqrr(+prompt("Please enter number for square")))



// Task 6
function factorial1(num1a) {
   var result = 1;
   for (var i = 0; i < num1a; i++) {
      result = result * (i + 1);

   }
   return result;
}
alert(factorial1(+prompt("Please enter number for factorial")))



// Task 7
function printCount(startN, endN) {
   for (var i = startN; i <= endN; i++) {
      document.write(i + "<br>")
   }
}
printCount(5, 10)
document.write("<br><br><br>")




// Task 9
function areaR(width1 = 5, height1 = 3) {
   var rect = width1 * height1;
   return rect;
}
alert(areaR())
alert(areaR(3, 2))



// Task 10
function palind(word) {
   word1 = ""
   for (var i = (word.length - 1); i >= 0; i--) {
      word1 += word[i]
   }
   if (word1 === word) {
      alert("the word is palindrome")
   }
   else {
      alert("the word is not palindrome")
   }
   alert(word1)
}
palind("madam")



// Task 11
function title(string) {
   var text1 = string.toLowerCase().split(" ");
   for (var i = 0; i < text1.length; i++) {
      text1[i] = text1[i][0].toUpperCase() + text1[i].slice(1);
   }
   return text1;
}
var x = "the quick brown fox"
var titleString = new String(title(x));
titleString = titleString.replace(/,/g, " ");
document.write("User input: " + x + "<br>")
document.write("Title case: " + titleString + "")
document.write("<br><br><br>")



// Task 12
var str = "Web Development Tutorial"
var arr1 = str.split(" ")
var length1 = 0;
var word = ""
for (var i = 0; i < arr1.length; i++) {
   if (arr1[i].length > length1) {
      length1 = arr1[i].length;
      word = arr1[i];
   }
   else {
      continue;
   }
}
document.write("EXAMPLE STRING: " + str + "<br>")
document.write("EXPECTED OUTPUT: " + word)
document.write("<br><br><br>")



// Task 13
function count1(str1, letter) {
   var arr1 = str.split("");
   var count = 0;
   for (var i = 0; i < arr1.length; i++) {
      if (arr1[i] === letter) {
         count += 1
      }
      else {
      }
   }
   alert("Number of occurances of "+letter+" in word "+str1+" is "+count)
}
count1("JSResourceS.com","o")
