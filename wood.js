/**
 * 
 *chair --> 3 cft
 * table --> 10 cft
 * bed --> 50 cft
 * 
 * 
*/


function woodQuantity(chairQuantity, tableQuantity, bedQuantity) {
    const perChairWood = 4;
    const perTableWood = 12;
    const perBedWood = 50;


    const allChairWood = chairQuantity * perChairWood;
    const allTableWood = tableQuantity * perTableWood;
    const allBedWood = bedQuantity *perBedWood;

    const totalWoods = allChairWood + allTableWood + allBedWood;
    return totalWoods;
}

const wood = woodQuantity(10,2,4);
console.log("Total Wood Needed:", wood, " sft");
