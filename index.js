var $i = jQuery('#input1');
var $o = jQuery('#result');

function myFunc() {
  var result = $i.val() * 2;
  
  $o.html(result);
}

$i.on("keyup", myFunc);
