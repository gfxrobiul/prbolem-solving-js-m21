// find big number using if else //

const jim = 256;
const tim = 189;
const kim = 68;

if (jim > tim && jim > kim ) {
    console.log("Jim is the ultimate boss")
}
else if ( tim > jim && tim > kim ) {
    console.log("Tim is the boss")
}else{
    console.log("kim is the karadashians boss")
}

//find the max number using functions

function maxOfThree(num1, num2, num3) {
    if (num1 > num2 && num1 > num3 ) {
    return"Num1 is the ultimate boss";
}
else if ( num2 > num1 && num2 > num3 ) {
    return "Num2 is the boss";
}else{
    return "Num3 is the karadashians boss";
}
}

const result = maxOfThree(24,25,26);
console.log(result);



// ================== USing Math.max
function findBigBoss(jam, tam, kam) {
    const maxNumber = Math.max(jam, tam, kam);

    if (maxNumber === jam) {
        return "Jam is the ultimate boss"
    }
    if (maxNumber ===  tam) {
        return "Tam is the Boss"
    }
    else{
        return "Kam is the kardhasian BOSS"
    }
}

const BigbossMax = findBigBoss(542, 2567, 378);
console.log(BigbossMax);

/// MATH max/

const max = Math.max(434, 424, 23 ,53, 45, 767, 234, 43);
console.log("max using ",max);
