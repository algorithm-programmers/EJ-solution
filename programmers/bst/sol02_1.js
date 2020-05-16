var floor = n => Math.floor(n);

function s(n, times) {
    var min = 0, max = n * Math.max(...times);

    while (min <= max) {
        var mid = floor((min + max) / 2);
        var maxInMid = times.reduce((acc, cur) => acc += floor(mid / cur), 0);
        if (n <= maxInMid) {
            max = mid - 1;
        } else {
            min = mid + 1;
        }
    }

    return min;
}

function solution(n, times) {
    return s(n, times);
}
