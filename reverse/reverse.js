list = ["ravij", "bhuwaneshwari", "bhanuj", "jayendra", "baby"];



var newList = [];


function reverse() {

    for (var counter = 4; counter >= 0; counter--) {
        newList = list[counter];


        document.write(newList);

    }



}




function check() {
    var element = document.getElementById('check').value;

    for (var i = 0; i < list.length; i++) {


        if (element == list[i]) {

            var availability = true;

            break;

        }


        else {

            availability = false;

        }
        
        
        
    }
    
  



}


