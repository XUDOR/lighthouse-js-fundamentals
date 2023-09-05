// for
for (let i = 0; i < 10; i ++) {
  if (i === 3) {
    continue; // code block {} will run... essentially skipping the print of 3 (line 9) 
  }
  if ( i ===7 ) {
    break; // run line 11 outside of code block.
  }
  console.log(i)
}
// this code runs after
  console.log("STOP");
  