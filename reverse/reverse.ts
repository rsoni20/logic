function operation() {
    var x = (<HTMLTextAreaElement>document.getElementById("textArray")).value;
    var spl = x.split(",");
    console.log(spl);
    var newList = reverse(spl);
    console.log(newList);
    // Write a function that returns the elements on odd positions in a list.

    var oddList: string[] =[];
    for (var i = 0; i < newList.length; i++) {
        if (i % 2 != 0) {
            oddList.push(newList[i]);
        }

    }
    console.log(oddList);
    console.log(oddList.length);
}

function reverse(str: string[]) {
    var newList: string[] = [];
    for (var counter = 0; counter < str.length; counter++) {

        if (str[counter].trim() != "") {
            newList.unshift(str[counter].trim());

        }
    }
    return newList;

}



