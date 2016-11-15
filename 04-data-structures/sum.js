// Write a sum function that takes an array of numbers and returns the sum of these numbers.
// [1,2,3,4,5,6,7,8,9,10] => 55
// [10, 20, 66] => 96

function sum(arr) {
  var result = 0;
  for (var i = 0; i < arr.length; i++) {
    result += arr[i]
  }
  return result
}

console.log(sum([10, 20, 66]));
