function leap(){
    var year = 2016;
    
    for (var counter = 0; counter <= 20; counter++){
        if (year %4 ==0){
            
            document.write("Leap year " + year+ "<br>");
            
        }
        year++;
        
    }
    

}
