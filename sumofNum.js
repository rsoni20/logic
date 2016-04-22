// Write a program that asks the user for a number n and prints the sum of the numbers 1 to n


function sumofNum(){
    
  var num = parseInt(document.getElementById("initNum").value);  
  var x = 0;
  for (var counter = 1; counter<= num; counter++){

var x = x +counter;

  }
  
  document.write(x);
}