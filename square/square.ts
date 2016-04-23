
function operation() {
    // // Perfect square
    // for (var counter = 1; counter <= 20; counter++) {
    //     var x = counter * counter
    //     console.log(x);
    // }
    // //Write a function that concatenates two lists.
    // var list1: string[] = ["ravij", "bhanuj"];
    // var list2: string[] = ["bhuli", "jayendra"];

    // var list3: string[] = [];
    // console.log(list1.concat(list2));

    // //Write a function that combines two lists by alternatingly taking elements

    // for (var i = 0; i < list1.length; i++) {
    //     list3.push(list1[i]);
    //     list3.push(list2[i]);
    // }
    // console.log(list3);


    var elist = [1, 2, 3, 4, 5, 6];
    for (var i = 0; i < 20; i++) {
        for (var j = 0; j < 2; j++) {

            elist.push(elist.shift());

        }

        console.log(elist);
    }

    var num = 12345;

    var str = num.toString();
    console.log(str);
    var emp: number[] = [];
    for (var k = 0; k < str.length; k++) {

        emp.push(+str.charAt(k));
    }

    console.log(emp);



    var hello: string[] = ["Hello", "World", "in", "a", "frame"];
    console.log("********");
    for (var l = 0; l < hello.length; l++) {
        var x ="*"+ hello[l] + "*\n";
        console.log(x);
    }
    
    console.log("********");
    
    var myString = "apple";
    
    

var newString = myString.substring(1) + myString.substring(0,1);
console.log(newString);


// Fibonacci Series

var var1 = 0;
		var var2 = 1;
		var var3;
 
		var num = prompt("Enter the limit to generate fibonacci no",0);
 
		document.write(var1+"<br />");
		document.write(var2+"<br />");
 
		for(var i=3; i <= num;i++)
		{
			var3 = var1 + var2;
			var1 = var2;
			var2 = var3;
 
			document.write(var3+"<br />");
		}
        
        
        
        //quick sort
 




}

