//Write a range function that takes 2 arguments: start and end, and returns an array containing all the numbers from start up to and including end
//1, 10 => [1,2,3,4,5,6,7,8,10]
//70-83 => [70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83]

function range(start, end) {
  var rangeArray = new Array;
  var stopNum = end - start;
  rangeArray.push(start)
  if (stopNum > 0) {
    while (rangeArray.length < stopNum) {
      rangeArray.push(start += 1)
    }
  }
  // How do you convert a negative number to a positive number?
  rangeArray.push(end)
  return rangeArray
}

console.log(range(1,10,2));
