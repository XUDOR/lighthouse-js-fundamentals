const whichSchool  = function (age) {

  if (age >= 1 && age <= 12) {
    console.log ("Elementary School");
  }  
  else if (age >= 13 && age <= 18 ) {
    console.log ("Secondary School");  
  }
  else {
    console.log("Lighthouse Labs");
  }



  
}

console.log("I am 35. Which school should I go to?");
console.log(whichSchool(35));
console.log("I am 8. Which school should I go to?");
console.log(whichSchool(8));
console.log("I am 14. Which school should I go to?");
console.log(whichSchool(14));
