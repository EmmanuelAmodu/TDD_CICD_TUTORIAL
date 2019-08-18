const quickSort = require('./quickSort');

test('Passing arg [1, 4, 5, 3, 2] to quickSort should return [1, 2, 3, 4, 5]', () => {
    expect(quickSort([1, 4, 5, 3, 2], 4, 5)).toEqual([1, 2, 3, 4, 5]);
});
