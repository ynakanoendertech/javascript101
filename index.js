var $i = $('#input1');
var $o = $('#result');

function myFunc() {
  var result = $i.val() * 2;
  
  $o.html(result);
}

$i.on("keyup", myFunc);
