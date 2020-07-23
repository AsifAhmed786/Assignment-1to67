// Task 1
// section i

var maincontent = document.getElementById("main-content");


// section ii
// c
console.log(maincontent.children)
// console.log(maincontent.childNodes)



// section iii

var classElements = document.getElementsByClassName("render")
var gap = document.createElement("br")
maincontent.appendChild(gap)

for(var i =0;i<classElements.length;i++){
    
    var result = document.createElement("p");
    var text = document.createTextNode(String(classElements[i].innerHTML))
    result.appendChild(text)
    maincontent.appendChild(result)
}


// section iv
document.getElementById("first-name").value = "Muhammad Asif"


// sectoin v
document.getElementById("last-name").value = "Ahmed"
document.getElementById("email").value = "asifahmed1us@hotmail.com"



// Task 2
// section i
var formcontent = document.childNodes
console.log(formcontent[1].childNodes[2].childNodes[1].childNodes[3].nodeType)


// section ii
console.log(formcontent[1].childNodes[2].childNodes[1].childNodes[3].childNodes[7].nodeType)


// Task iii
formcontent[1].childNodes[2].childNodes[1].childNodes[3].childNodes[7].value = "Updated Node Ahmed"


// Task iv
console.log(formcontent[1].childNodes[2].childNodes[1].childNodes[5].firstChild)
console.log(formcontent[1].childNodes[2].childNodes[1].childNodes[5].lastChild)



// Task v
console.log(formcontent[1].childNodes[2].childNodes[1].childNodes[3].childNodes[7].nextSibling)
console.log(formcontent[1].childNodes[2].childNodes[1].childNodes[3].childNodes[7].previousSibling)


// Task vi
console.log(formcontent[1].childNodes[2].childNodes[1].childNodes[3].childNodes[11].parentNode)
console.log(formcontent[1].childNodes[2].childNodes[1].childNodes[3].childNodes[11].nodeType)