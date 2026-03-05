const palindromes = function (string) {
    const processedString = string
    .toLowerCase()
    .split('')
    .filter(char => /[a-z0-9]/.test(char))
    .join('');

    const reversedString = processedString
    .split('').reverse().join('');

    return processedString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
