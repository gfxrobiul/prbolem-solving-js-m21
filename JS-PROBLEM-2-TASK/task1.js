// Task -1:
// Find the lowest number in the array below.
// const heights2 = [167, 190, 120, 165, 137];

function findLowestNumber(numbers){
  let lowestNumber = numbers[0];
  for (const number of numbers) {
    if (number < lowestNumber) {
      lowestNumber = number;
    }
  }
  return lowestNumber;
}

const heights2 = [167, 190, 120, 165, 137];
const lowest = findLowestNumber(heights2);
console.log('This is the lowest number:', lowest);