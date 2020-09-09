/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let maxStr = '', maxLen = 0, currIdx = 0;
    for (let i = 0; i < s.length; i++) {
        const element = s[i];
        currIdx = maxStr.indexOf(element);
        
        if (currIdx > -1) {
            maxStr = maxStr.substring(currIdx + 1);
        }
        
        maxStr += element;
        maxLen = Math.max(maxLen, maxStr.length);
        console.log(currIdx, maxStr);
    }

    console.log(s, maxLen);
    return maxLen;
};

lengthOfLongestSubstring("abcabcbb");
lengthOfLongestSubstring("bbbbb");
lengthOfLongestSubstring("pwwkew"); // 3 "wke"
lengthOfLongestSubstring("");

// 틀린 코드
// 항상 인덱스 0부터 순회하기 때문에 s = pwwkew 의 경우, 2가 나옴.
var fail = function(s) {
    let stack = [], count = 0;
    for (let i = 0; i < s.length; i++) {
        const element = s[i];

        if (stack.indexOf(element) > -1) {
            break;
        }

        stack.push(element);
        count++;
    }

    return count;
};