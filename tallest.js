const heights = [64, 66, 68, 72, 78, 60 ];

function getMax(numbers) {
    let maxNumber = 0;
    for (const num of numbers) {
       if (num > maxNumber) {
        maxNumber = num;
       }
    }
    return maxNumber;
}


const max = getMax(heights);
console.log('max value is:', max)


// =========================
function getMin(numbers) {
    let minNumber = numbers[0];
    for (const number of numbers) {
        if (number > minNumber) {
            minNumber = number;
        }
    }
    return minNumber;
}

const min = getMin(heights);
console.log('Min value is:', min);