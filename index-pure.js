var i = document.getElementById("input1");
var o = document.getElementById("result");

function myFunc(event) {
  var result = event.target.value * 2;

  o.innerHTML = result;
}

i.addEventListener("input", myFunc);
