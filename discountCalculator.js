/**
 * upto 100: ---> 100;
 * more than 101-200: ->> 90;
 * more than 201: --> 70
 *  
 */


function discountedPrice(quantity) {
    if (quantity <= 100) {
        const totalPrice = quantity * 100;
        return totalPrice;
    }else if (quantity <= 200) {
        const totalPrice = quantity * 90;
        return totalPrice;
    }else{
        const totalPrice = quantity * 70;
        return totalPrice;
    }
}

const total = discountedPrice(2010);
console.log(total);