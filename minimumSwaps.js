function minimumSwaps(arr) {
    let swap = 0;
    const compare = {};
    for (let i = 0; i < arr.length; i++) {
        compare[arr[i]] = i;
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== i+1) {
            swap++;
            const temp = arr[i];
            const yet = compare[i+1];

            arr[i] = i + 1;
            arr[compare[i+1]] = temp;

            compare[arr[i]] = i;
            compare[temp] = yet;
        }
    }
    return swap;
}

console.log(minimumSwaps([1, 3, 5, 2, 4, 6, 7]))

module.exports = minimumSwaps;
