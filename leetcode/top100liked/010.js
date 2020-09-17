/**
 * @param {string} string
 * @param {string} pattern 
 * @return {boolean}
 */
var isMatch = function (string, pattern) {

    const regexp = new RegExp(`^${pattern}$`);
    const result = string.match(regexp); // 일치하는 것이 없으면 null이 반환된다.

    return !!result; // Boolean(result)
};

isMatch("aa", "a*");
// isMatch("q", "");