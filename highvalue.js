const phones = [
    {name:'Samsung', price:20000, camera:'12Mp', color: 'Black'},
    {name:'Xiomi', price:18000, camera:'12Mp', color: 'Black'},
    {name:'Oppo', price:93000, camera:'12Mp', color: 'Black'},
    {name:'Iphone', price:105500, camera:'12Mp', color: 'Black'},
    {name:'Walton', price:31000, camera:'12Mp', color: 'Black'},
]

function getHighestPhone(phones) {
    let max = phones[0];
    for (const phone of phones) {
       if (phone.price > max.price) {
        max = phone;
       }
    }
    return max;
}


const highValuePhone = getHighestPhone(phones);
console.log("Dami phone is:", highValuePhone);