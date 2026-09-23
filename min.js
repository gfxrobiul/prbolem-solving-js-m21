
  function getMin(numbers) {
    let min = numbers[0];
    for (const number of numbers) {
        if (number < min ) {
            min =  number;
        }
    }
    return min;
  }

  const prices = [20000, 16000, 50000, 100000, 12000, 30000, 35000 ];
  const cheap = getMin(prices);
  console.log('cheapest one is:', cheap);