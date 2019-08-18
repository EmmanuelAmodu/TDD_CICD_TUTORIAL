function whatFlavorsWithHash(cost, money) {
    const hash = {};
    let result;
    for (var i = 0; i < cost.length; i++){
        if (hash[cost[i]] === undefined) {
            hash[cost[i]] = [];
        }
        hash[cost[i]].push(i+1);
    }

    for (let i = 0; i < cost.length; i++) {
        const compliments = hash[money - cost[i]];
        if (compliments !== undefined) {
            for (let j = 0; j < compliments.length; j++) {
                const complim = compliments[j];
                if (i+1 !== complim) {
                    result = [complim, i+1];
                }
            }
        }
    }

    return result;
}

module.exports = whatFlavorsWithHash;

console.log(whatFlavorsWithHash([1, 4, 5, 9, 2, 7, 9, 6, 3, 4, 5, 9, 7, 9, 4, 5], 4));

console.log(whatFlavorsWithHash([2, 2, 4, 3], 4))

console.log(whatFlavorsWithHash([4, 3, 2, 5, 7], 8))