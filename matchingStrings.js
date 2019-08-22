function matchingStrings(strings, queries) {
    var hash = {};
    for (let i = 0; i < strings.length; i++) {
        const el = strings[i];
        hash[el] = hash[el] === undefined ? 1 : hash[el] + 1;
    }

    return queries.map(e => {
        return hash[e] || 0;
    })
}

module.exports = matchingStrings;