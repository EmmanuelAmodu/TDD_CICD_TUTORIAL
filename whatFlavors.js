function whatFlavors(cost, money) {
    let result;
    for (let i = 0; i < cost.length; i++) {
        const el = cost[i];
    
        // use binary search here
        const rem = cost.indexOf(money - el, i + 1);
        if (rem > -1) {
            console.log([i + 1, rem + 1]);
            result = [i + 1, rem + 1];
            break;
        }
    }
    return result;
}

module.exports = whatFlavors;

console.log(whatFlavors([1, 4, 5, 9, 2, 7, 9, 6, 3, 1, 4, 5, 9, 7, 9, 1, 4, 5], 4));
