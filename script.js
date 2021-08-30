var index = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("Slides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (index > x.length) {index = 1}    
  x[index-1].style.display = "block";  
  setTimeout(carousel, 2000);
}