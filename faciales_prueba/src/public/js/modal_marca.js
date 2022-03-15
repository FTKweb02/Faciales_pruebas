// Get the modal
var modal = document.getElementById("myModal");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");
var modal4 = document.getElementById("myModal4");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var btn2 = document.getElementById("myBtn2");
var btn3 = document.getElementById("myBtn3");
var btn4 = document.getElementById("myBtn4");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close2")[0];
var span3 = document.getElementsByClassName("close3")[0];
var span4 = document.getElementsByClassName("close4")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
  modal.style.display = "block";
  modal2.style.display = "none";
  modal3.style.display = "none";
  modal4.style.display = "none";
}
btn2.onclick = function () {
  modal2.style.display = "block";
  modal.style.display = "none";
  modal3.style.display = "none";
  modal4.style.display = "none";
}
btn3.onclick = function () {
  modal3.style.display = "block";
  modal.style.display = "none";
  modal2.style.display = "none";
  modal4.style.display = "none";
}
btn4.onclick = function () {
  modal4.style.display = "block";
  modal.style.display = "none";
  modal2.style.display = "none";
  modal3.style.display = "none";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}
span2.onclick = function () {
  modal2.style.display = "none";
}
span3.onclick = function () {
  modal3.style.display = "none";
}
span4.onclick = function () {
  modal4.style.display = "none";
}
