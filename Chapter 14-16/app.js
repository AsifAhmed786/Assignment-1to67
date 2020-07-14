// Task 1
var a = [];


// Task 2
var b = new Array();
// alert(a,b)

// Task 3
var a1 = ["string1","string2"]
alert(a1)


// Task 4
var a1 = [1,2,4,5,5]
alert(a1)


// Task 5   
var a1 = [true,false,true,false]
alert(a1)


// Task 6
var a1 = ["hello",2,false];
alert(a1)



// Task 7
var qual = ["SSC","HSC","BCS","BS","BCOM","MS","M.Phill","PhD"];
document.write("<ol>");   
// document.write(qual.length)
for (var i = 0; i<qual.length; i++)
{
    document.write("<li>"+ qual[i] +"</li>");
    // alert(i)
}
document.write("</ol>");
document.write("<br><br><br>")


// Task 8
var studentName = ["Asif","Imran","Hammad"];
var studentScores = [320,230,480];
var totalMarks = 500;
for (var i = 0;i<studentName.length;i++){
    document.write("<p>Score of "+studentName[i]+" is "+studentScores[i]+". Percentage: "+((studentScores[i]/totalMarks)*100)+"%</p>")
}
document.write("<br><br><br>")





// Task 9
var color = ["red","blue","black"]
for(var i = 0; i<color.length; i++){
    document.write(color[i]+"<br>")
}
document.write("<br><br>")
color.unshift(prompt("what color you want to add in the begining"));
for(var i = 0; i<color.length; i++){
    document.write(color[i]+"<br>")
}
document.write("<br><br>")
color.push(prompt("what color you want to add in the end"));
for(var i = 0; i<color.length; i++){
    document.write(color[i]+"<br>")
}
document.write("<br><br>")
color.unshift(prompt("what color you want to add in the begining"));
color.unshift(prompt("what color you want to add in the begining"));
for(var i = 0; i<color.length; i++){
    document.write(color[i]+"<br>")
}
document.write("<br><br>")
color.pop()
for(var i = 0; i<color.length; i++){
    document.write(color[i]+"<br>")
}
document.write("<br><br><br>")



// Task 10
var studentScores = [320, 230,480,120]
document.write("Scores of students:")
for(var i=0;i<studentScores.length;i++){
    document.write(studentScores[i]+",")

}
document.write("<br>")
studentScores.sort();
document.write("Ordered scores of students:")
for(var i=0;i<studentScores.length;i++){
    document.write(studentScores[i]+",")

}
document.write("<br><br><br>")



// Task 11
var cities = ["Karachi","Lahore","Islamabad","Quetta","peshawar"]
var selectedCities = cities.slice(1,4)
// document.write(selectedCities)
document.write("Cities List:<br>")
for(var i=0; i<cities.length; i++){
     document.write(cities[i]+",")
};
document.write("<br><br>")
document.write("Selected cities list:<br>")
for(var i = 0;i < selectedCities.length;i++){
    document.write(selectedCities[i]+",")
}
document.write("<br><br><br>")



// Task 12
var arr = ["This","is","my","cat"]
document.write("Array:<br>")
for(var i = 0; i<arr.length; i++){
    document.write(arr[i]+",")
}
document.write("<br>")
document.write("String:<br>")
document.write(arr.join(" "))
document.write("<br><br><br>")



// Task 13
var devices = ["keyboard","mouse","printer","monitor"]
document.write("Devices:<br>")
for(var i = 0;i < devices.length; i++){
    document.write(devices[i]+",")
    
}
document.write("<br><br>")
for(var i = 0;i < devices.length; i++){
    document.write("Out:<br>")
    document.write(devices[i]+"<br>")

}
document.write("<br><br><br>")


// Task 14

var devices = ["keyboard","mouse","printer","monitor"]
document.write("Devices:<br>")
for(var i = 0;i < devices.length; i++){
    document.write(devices[i]+",")
    
}
document.write("<br><br>")
for(var i = (devices.length-1);i >= 0; i--){
    document.write("Out:<br>")
    document.write(devices[i]+"<br>")

}
document.write("<br><br><br>")




// Task 15
var oem = ["Apple","Samsung","Nokia","Sony","Haier"]
document.write("<select name='devices' id=''>");
for(var i = 0; i<oem.length; i++){
    document.write("<option >"+oem[i]+"</option>");
    
}
document.write("<select>")