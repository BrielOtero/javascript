window.onload = function () {
  var img1Value = document.getElementById("img1");
  var img2Value = document.getElementById("img2");
  var img3Value = document.getElementById("img3");
  var img4Value = document.getElementById("img4");

  img1Value.addEventListener("mouseover", show1, false);
  img2Value.addEventListener("mouseover", show2, false);
  img3Value.addEventListener("mouseover", show3, false);
  img4Value.addEventListener("mouseover", show4, false);
}

function show1() {
  showAll();

  var img1 = document.getElementById("img1");
  var div1 = document.getElementById("div1");

  img1.style.display = "none";
  div1.style.display= "block"

  div1.innerHTML="<div>"+img1.getAttribute("alt")+"</div>";
}
function show2() {
  showAll();

  var img2 = document.getElementById("img2");
  var div2 = document.getElementById("div2");

  img2.style.display = "none";
  div2.style.display= "block"

  div2.innerHTML="<div>"+img2.getAttribute("alt")+"</div>";
}

function show3() {
  showAll();

  var img3 = document.getElementById("img3");
  var div3 = document.getElementById("div3");

  img3.style.display = "none";
  div3.style.display= "block"

  div3.innerHTML="<div>"+img3.getAttribute("alt")+"</div>";
}

function show4() {
  showAll();

  var img4 = document.getElementById("img4");
  var div4 = document.getElementById("div4");

  img4.style.display = "none";
  div4.style.display= "block"

  div4.innerHTML="<div>"+img4.getAttribute("alt")+"</div>";
}

function showAll() {
  var img1 = document.getElementById("img1");
  var img2 = document.getElementById("img2");
  var img3 = document.getElementById("img3");
  var img4 = document.getElementById("img4");

  var div1 = document.getElementById("div1");
  var div2 = document.getElementById("div2");
  var div3 = document.getElementById("div3");
  var div4 = document.getElementById("div4");


  img1.style.display = "block";
  img2.style.display = "block";
  img3.style.display = "block";
  img4.style.display = "block";

  div1.style.display = "none";
  div2.style.display = "none";
  div3.style.display = "none";
  div4.style.display = "none";
}
