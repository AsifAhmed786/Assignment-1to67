// Task 1
function linkClick(){
    alert("This is link click alert")
}


// Task 2
function imgClick(){
    alert("Thanks for purchasing a phone from us")
}


// Task 3
var stdNames = ["Asif","Ahmed","Imran","Jamal","Wajahat","Aslam","Umar","Shakeel","Usman","Naveed"]
var stdClass = [9,3,5,6,2,3,7,1,3,4]
var tab;
var tableCount = 10;

function fillData(){
    for(var i = 0; i<stdNames.length;i++){
        tab = document.getElementById("tr"+String(i+1))
        tab.innerHTML += "<td>"+i+"</td>";
        tab.innerHTML += "<td>"+stdNames[i]+"</td>";
        tab.innerHTML += "<td>"+stdClass[i]+"</td>";
        tab.innerHTML += "<td><button onclick='deleteStd("+i+")'>Delete</button></td>";      
    }
}
fillData()

function deleteStd(index)
{
    stdNames.shift(index)
    stdClass.shift(index)
    for(var i = 0; i<tableCount;i++){
        var tab12 = document.getElementById("tr"+String(i+1))
        tab12.innerHTML = ""
    }
    fillData()

}




// Task 4
var img1 = document.getElementById("img1");
function imgChng1(){    
    img1.src = "images/wp3.jpg";
}

function imgChng2(){
    img1.src = "images/wp1.jpg"
}


// Task 5
var counterp = document.getElementById("counterp");
function increaseCounter(){
    counterp1 = parseInt(counterp.innerHTML)
    counterp1++;
    counterp.innerHTML = counterp1;
}
function decreaseCounter(){
    counterp1 = parseInt(counterp.innerHTML)
    counterp1--;
    counterp.innerHTML = counterp1;
}