    list = ["ravij", "bhuwaneshwari", "bhanuj", "jayendra", "baby"];



var x = list.sort(function(a,b){
    
   return a.length-b.length; 
});

function largestElement(){
    
    document.write(x[x.length-1]);
}