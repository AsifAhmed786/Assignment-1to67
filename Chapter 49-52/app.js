// Task 1

var userid = document.getElementById("userid");
var passw = document.getElementById("passw");
var userinfo = document.getElementById("userinfo");
function submit1(){
    userinfo.innerHTML = "User Name: "+userid.value+" and Password is: "+passw.value+""
}


// Task 2
function readMore(){
    var para1 = document.getElementById("para1")
    para1.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum inventore itaque fugiat beatae harum, repudiandae ipsa eius obcaecati voluptas corrupti cupiditate, odit at eaque maxime sed officia. Porro, numquam alias!"
}


// Task 3
var stdNames = ["Asif","Ahmed","Imran","Jamal","Wajahat"]
var stdClass = [9,3,5,6,2]
var tab;
var tableCount;

function fillData(){
    for(var i = 0; i<stdNames.length;i++){
        var str1 = String("tr"+(i+1))
        // alert(str1)
        tab = document.getElementById(str1)        
        tab.innerHTML += "<td>"+i+"</td>";
        tab.innerHTML += "<td>"+stdNames[i]+"</td>";
        tab.innerHTML += "<td>"+stdClass[i]+"</td>";
        tab.innerHTML += "<td><button onclick='deleteStd("+i+")'>Delete</button></td>";      
        tab.innerHTML += "<td><button onclick='editRecord("+i+")'>Edit</button></td>";      
            
    }
}
fillData()

function deleteStd(index)
{
    tableCount = stdNames.length
    stdNames.shift(index)
    stdClass.shift(index)
    for(var i = 0; i<tableCount;i++){
        var tab12 = document.getElementById("tr"+String(i+1))
        tab12.innerHTML = ""
    }
    fillData()

}
function addRecord(){
    tableCount = stdNames.length
    var stdName1 = document.getElementById("userName")
    var stdClass1 = document.getElementById("classNo")
    stdNames.push(stdName1.value)
    stdClass.push(stdClass1.value)
    for(var i = 0; i<tableCount;i++){
        var tab12 = document.getElementById("tr"+String(i+1))
        tab12.innerHTML = ""
    }
    fillData()
}

function editRecord(index1){
    alert("Student Name is: "+stdNames[index1]+"\nStudent Class: "+stdClass[index1])

}