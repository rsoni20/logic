// Modify the previous program such that only multiples of three or five are considered in the sum, e.g. 3, 5, 6, 9, 10, 12, 15 for n=17


function mulofNum(){
    
  var num = parseInt(document.getElementById("multiply").value);  
  var x = 0;
  for (var counter = 1; counter<= num; counter++){
if (counter % 3 == 0 || counter % 5 == 0 ){
var x = x +counter;
}


  }
  

  
  document.write(x);
}