const count = parseInt(process.argv[2], 10);

if (isNaN(count)) {
  console.log("Missing number of occurrences");
} else if (count > 0) {
  let i = 0;
  while (i < count) {
    console.log("C is fun");
    i++;
  }
}