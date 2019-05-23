var i = document.getElementById("input1");
var o = document.getElementById("result");

const myFunc = (event) => o.innerHTML = event.target.value * 2;

i.addEventListener("input", myFunc);
