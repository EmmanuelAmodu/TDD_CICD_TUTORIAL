const whatFlavors = require('./whatFlavors');

test('adds 1 + 2 to equal 3', () => {
    expect(whatFlavors([1, 4, 5, 3, 2], 4)).toBe([1, 4]);
});