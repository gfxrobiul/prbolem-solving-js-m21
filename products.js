const products = [
    {name: 'shampoo', price: 300},
    {name: 'chiruni', price: 100},
    {name: 'shirt', price: 700},
    {name: 'pant', price: 1200},
]

function getShoopingTotal(products) {
    let totalPrice = 0;
    for (const product of products) {
        totalPrice = totalPrice + product.price;
    }
    return totalPrice;
}


const total = getShoopingTotal(products);
console.log("total ajke khosabe:", total);