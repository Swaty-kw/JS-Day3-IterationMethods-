const numbers = [10, 13, 20, 25, 38, 35, 40];

/*****************************************************************
Part 1: Filtering

Write code to perform the following tasks using the filter method:
Q1) Create a new array containing numbers that are greater than or equal to 25.
Q2) Create a new array containing numbers that are divisible by 5.
******************************************************************/

let numbersBiggerThan25 = numbers.filter((number) => {
  if (number >= 15) {
    return true;
  } else {
    return false;
  }
});

const numbersdevivedby5 = numbers.filter((number) => {
  if (number % 5 == 0) {
    return true;
  } else {
    false;
  }
});

console.log(numbersBiggerThan25);
console.log(numbersdevivedby5);

let numSquare = numbers.map((number) => {
  return n * n;
});
let numberx2 = numbers.map((number) => {
  return n ** 2;
});
console.log(numSquare);
console.log(numberx2);

let sum1 = numbers.filter((number) => {
  if (number >= 20) {
    return true;
  } else {
    return false;
  }
});
let squaredNumbers = sum1.map((number) => {
  return number * number;
});

console.log(sum1);
console.log(squaredNumbers);

let devi5 = numbers.filter((number) => {
  if (number % 5 == 0) {
    return true;
  } else {
    return false;
  }
});

let multiby3 = devi5.map((number) => {
  number * 3;

  console.log(devi5);
  console.log(multiby3);
});
console.log(devi5);
