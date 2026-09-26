// Task -2:
// Find the friend with the smallest name.
// const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];




function findSmallestName(names) {
    let  smallestName = names[0];
    for (let i = 0; i < names.length; i++) {
        if (names[i].length < smallestName.length ) {
            smallestName = names[i];
        }
    }
    return smallestName;
}

const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
const small = findSmallestName(heights2);
console.log('Smallest name is:', small);