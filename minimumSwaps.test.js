const minimumSwaps = require('./minimumSwaps');

test('should return minimum number of swap needed to sort array', () => {
    expect(minimumSwaps([7, 1, 3, 2, 4, 5, 6])).toBe(5);
});

test('should return minimum number of swap needed to sort array', () => {
    expect(minimumSwaps([1, 3, 5, 2, 4, 6, 7])).toBe(3);
});
