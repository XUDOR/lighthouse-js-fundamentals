const whichSchool  = function (age) {

if (age >= 8 && age <13) {
  console.log ("ELEMENTARY");
 }  
  else if (age >= 13 && age <19 ) {
  console.log ("HIGH SCHOOL");  
  }
  else {
    console.log("TREEHOUSE");
  }

}

console.log("I am 35. Which school should I go to?");
console.log(whichSchool(35));
console.log("I am 8. Which school should I go to?");
console.log(whichSchool(8));
console.log("I am 14. Which school should I go to?");
console.log(whichSchool(14));