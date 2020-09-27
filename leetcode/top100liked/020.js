/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let stack = [];
    const map = {
        '(': ')',
        '{': '}',
        '[': ']'
    }
    for (let i = 0; i < s.length; i++) {
        const element = s[i];

        if (map[element]) {
            stack.push(map[element]);
        } else if (element !== stack.pop()) {
            return false;
        }
    }

    return stack.length === 0;
};

// isValid("()")
// isValid("{()}")
isValid("(]")

// string 비교일 때는 s.charAt(i);