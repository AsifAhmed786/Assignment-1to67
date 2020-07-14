// Task 1
var arr = [[4,2,4],[3,6,7]];
alert(arr[0][1])



// Task 2
var arr = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];


// Task 3
for (var i = 0; i< 10; i++){
    document.write((i+1)+"<br>")
}
document.write("<br><br><br>")



// Task 4
var tableNumber = +prompt("Enter a number to show its multipilication table")
var tableLength = +prompt("Enter length multipilication table")
for (var i = 0;i<tableLength;i++){
    document.write(tableNumber+" X "+(i+1)+" = "+(tableNumber*tableLength)+"<br>")
}
document.write("<br><br><br>")



// Task 5
var fruits = ["apple","banana","mango","orange","strawberry"];

for(var i = 0;i<fruits.length;i++){
    document.write(fruits[i]+"<br>")
}
document.write("<br>")

for(var i = 0;i<fruits.length;i++){
    document.write("Element at index "+i+" is "+fruits[i]+"<br>")
}
document.write("<br><br><br>")



// Task 6
document.write("<h1>Counting</h1>")
for(var i = 0; i<15;i++){
    document.write(i+",")
}
document.write("<br>")

document.write("<h1>Reverse Counting</h1>")
for(var i = 10; i>0;i--){
    document.write(i+",")
}
document.write("<br>")


document.write("<h1>Even</h1>")
for(var i = 0; i<=20;i++){
    if((i%2) === 0){
        document.write(i+",")
    }
    else{
        continue
    }    
}
document.write("<br>")



document.write("<h1>Odd</h1>")
for(var i = 0; i<=20;i++){
    if((i%2) !== 0){
        document.write(i+",")
    }
    else{
        continue
    }    
}
document.write("<br>")



document.write("<h1>Even</h1>")
for(var i = 0; i<=20;i++){
    if(i===0){
        continue
    }
    if((i%2) === 0){
        document.write(i+"k,")
    }
    else{
        continue
    }    
}
document.write("<br>")



// Task 7
var bakery = ["cake","apple pie","cookie","chips","patties"]
var item = prompt("Welcome to ABC bakery. What do you want to order sir/ma'am")
for(var i = 0;i<bakery.length;i++){
    if(item===bakery[i]){
        alert("cookie is available at index "+i+" in our bakery")
        break
    }
    else{
        if((i+1)===bakery.length){
            alert("We are sorry "+item+" is not available in our bakery")
        }
    }
    
}
document.write("<br><br><br>")





// Task 8
var arrItem = [24,53,78,91,12]
document.write("Array items: ")
var largest = arrItem[0]
for(var i = 0;i<arrItem.length;i++){
    if(arrItem[i]>largest){
        largest = arrItem[i]
    }
    document.write(arrItem[i]+",")
}
document.write("<br>")
document.write("The largest number is: "+largest)
document.write("<br><br><br>")



// Task 9
var arrItem = [24,53,78,91,12]
document.write("Array items: ")
var small = arrItem[0]
for(var i = 0;i<arrItem.length;i++){
    if(arrItem[i]<small){
        small = arrItem[i]
    }
    document.write(arrItem[i]+",")
}
document.write("<br>")
document.write("The smallest number is: "+small)
document.write("<br><br><br>")




// Task 10
for(var i = 0;i<=100;i++){
    if(i>0 && (i%5)===0){
        document.write(i+",")
    }
}