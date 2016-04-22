// Modify the previous program such that only the users Alice and Bob are greeted with their names.

function greetbob (){
    
    
    var x = document.getElementById('bob').value;
    var up = x.toUpperCase();
    
   if (x =="Bob" || x =="Alice"){
    document.write("Hello " + x);
   }
   else{
    document.write("Enter correct name");

       
   }
    
}
