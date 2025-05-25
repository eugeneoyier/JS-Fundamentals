const arg = parseInt(process.argv[2], 10);

if (isNaN(arg) || arg <= 0) {
  console.log("Missing number of occurrences");
} else {
  let output = "";
  for (let i = 0; i < arg; i++) {
    output += "C is fun\n";
  }
  console.log(output.trim());
}
