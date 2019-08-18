const whatFlavors = require('./whatFlavors');
const whatFlavorsWithHash = require('./whatFlavorsWithHash');

test('[1, 4, 5, 3, 2] should return [1, 4]', () => {
    expect(whatFlavors([1, 4, 5, 3, 2], 4)).toEqual([1, 4]);
});

test('[1, 4, 5, 9, 2, 7, 9, 6, 3, 1, 4, 5, 9, 7, 9, 1, 4, 5] should return [1, 9]', () => {
    expect(whatFlavors([1, 4, 5, 9, 2, 7, 9, 6, 3, 1, 4, 5, 9, 7, 9, 1, 4, 5], 4)).toEqual([1, 9]);
});


test('[1, 4, 5, 3, 2] should return [1, 4]', () => {
    expect(whatFlavorsWithHash([1, 4, 5, 3, 2], 4)).toEqual([1, 4]);
});

test('[1, 4, 5, 9, 2, 7, 9, 6, 3, 4, 5, 9, 7, 9, 4, 5] should return [1, 9]', () => {
    expect(whatFlavorsWithHash([1, 4, 5, 9, 2, 7, 9, 6, 3, 4, 5, 9, 7, 9, 4, 5], 4)).toEqual([1, 9]);
});