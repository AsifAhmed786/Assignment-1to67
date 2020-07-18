var pathList = ["images/1.jpg","images/2.png","images/3.jpg","images/4.jpg"]
var div = document.getElementById("maindiv")
for(var i = 0;i<pathList.length;i++){
    div.innerHTML += "<img src="+pathList[i]+" onclick=callModal("+i+") width=300px>";
}





// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
function callModal(imgPathIndex) {
  modal.style.display = "block";
  var imgplace = document.getElementById("imgplace")
  imgplace.innerHTML = "<img src="+pathList[imgPathIndex]+" width=80%>";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



var para1 = document.getElementById("para1")

function zoomIn(){
alert(para1.style.fontSize = "20px")
}

function zoomOut(){
    alert(para1.style.fontSize = "16px")
}