/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = 0;
    for (let i = 0; i < height.length; i++) {
        const leftHeight = height[i];

        for (let j = i + 1; j < height.length; j++) {
            const rightHeight = height[j];
            const minHeight = Math.min(leftHeight, rightHeight);

            const area = minHeight * (j - i);
            
            max = Math.max(max, area);
        }
    }

    console.log(max);
    return max
};

maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]); // 49