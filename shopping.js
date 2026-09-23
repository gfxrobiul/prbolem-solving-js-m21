/**
 * 
 * Shirt price --> 700
 * Pant price  --> 1250
 * shoe price  --> 900
 * 
*/


function shooping(shirtquantity, pantquantity, shoeQuantity ) {
    const shirtPrice = 700;
    const pantPrice = 1250;
    const shoePrice = 900;

    const shirtCost = shirtquantity * shirtPrice;
    const pantCost = pantquantity  * pantPrice;
    const shoeCost = shoeQuantity  * shoePrice;

    totalCost = shirtCost + pantCost + shoeCost;
    return totalCost;


}

const TotalShoppingCost = shooping(3,2,1);
console.log("Lullu total shopping korche", TotalShoppingCost , "TK" );