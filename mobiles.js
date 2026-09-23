const phones = [
    {name:'Samsung', price:20000, camera:'12Mp', color: 'Black'},
    {name:'Xiomi', price:18000, camera:'12Mp', color: 'Black'},
    {name:'Oppo', price:30000, camera:'12Mp', color: 'Black'},
    {name:'Iphone', price:500, camera:'12Mp', color: 'Black'},
    {name:'Walton', price:31000, camera:'12Mp', color: 'Black'},
]

function getCheapestPhone(phones) {
    let minimum = phones[0];
     for (const phone of phones) {
        if (phone.price < minimum.price) {
            minimum = phone;
        }
     }
     return minimum;
}

const cheap = getCheapestPhone(phones);
console.log('Cheapest phone is:', cheap);



