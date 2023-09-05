//We've given you one function `makeLine()` to start with. The function takes in a line length, 
//and builds a line of asterisks and returns the line with a newline character.
    
    

function makeLine(length) {
var line = "";
for (var j = 1; j <= length; j++) {
line += "* "
}
return line + "\n";
}