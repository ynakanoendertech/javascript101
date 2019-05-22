var $i = jQuery('#input1');
var $o = jQuery('#result');

function myFunc(event) {
  var result = event.target.value * 2;
  
  $o.html(result);
}

$i.on("keyup", myFunc);
