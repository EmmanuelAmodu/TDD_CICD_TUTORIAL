const matchingStrings = require('./matchingStrings');

test('should return an array of integers representing the frequency of occurrence of each query string in strings.', () => {
    expect(matchingStrings([ 'aba', 'baba', 'aba', 'xzxb' ], [ 'aba', 'xzxb', 'ab' ])).toEqual([2, 1, 0]);
});
