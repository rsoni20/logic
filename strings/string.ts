// Write a function that tests whether a string is a palindrome.
function operation() {
    var str = (<HTMLTextAreaElement>document.getElementById('textArray')).value;
    var x = checkpalindrome(str);
    
    console.log(x);
}
function checkpalindrome(str: string) {
    var len = str.length;
    for (var i = 0; i < Math.floor(len / 2); i++) {
        if (str[i] != str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}