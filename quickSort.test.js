const { quickSort, partition, swap} = require('./quickSort');

test('Passing arg [1, 4, 5, 3, 2, 9, 6, 8, 7] to quickSort should return [1, 2, 3, 4, 5, 6, 7, 8, 9]', () => {
    expect(quickSort([1, 4, 5, 3, 2, 9, 6, 8, 7], 0, 8)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
});
