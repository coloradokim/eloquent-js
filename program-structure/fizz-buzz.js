// print the numbers 1-100 (while loop)
// if a number is even, log fizz
// if a number is odd, log buzz


// [22, 46, 1024, 1, 99, 777] => [fizz, fizz, fizz, buzz, buzz, buzz]

function fizzBuzz(num) {
  while (num < 100) {
    num +=1
    if (num % 3 === 0) {
      console.log(num + " fizz");
    }
    if (num % 5 === 0) {
      console.log(num + " buzz");
    }
    else console.log(num);
  }
}

console.log(fizzBuzz(0));
