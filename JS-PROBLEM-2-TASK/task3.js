function calculateElectronicsBudget(laptopQuantity, tabletQuantity, mobileQuantity) {
    
    const laptopPerPrice = 35000;
    const tabletPerPrice = 15000;
    const mobilePerPrice = 20000;

    const totalLaptopPrice = laptopQuantity * laptopPerPrice;
    const totalTabletPrice = tabletQuantity * tabletPerPrice;
    const totalMobilePrice = mobileQuantity * mobilePerPrice;

    const totalProductBudget = totalLaptopPrice + totalTabletPrice + totalMobilePrice;
    return totalProductBudget;
}

const  totalPrice = calculateElectronicsBudget(2,3,2);
console.log('Total Price:', totalPrice);