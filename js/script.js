function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("js-slides");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

function plusDivs(n) {
  showDivs(slideIndex += n);
}

let slideIndex = 1;
showDivs(slideIndex);


var modal = document.getElementById('js-modal-form');
function showModal(){
	modal.style.display = "flex"; 
}

function closeModal(){
	modal.style.display = "none"; 
	console.log("sads");
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}