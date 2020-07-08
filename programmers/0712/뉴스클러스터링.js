/**
 * 뉴스 클러스터링
 * 자카드 유사도
 * 
 * @param {string} str1 
 * @param {string} str2 
 */
function solution(str1, str2) {
    str1 = str1.toUpperCase();
    str2 = str2.toUpperCase();

    let arr1 = [], arr2 = [];

    const regexp = /[^A-Z]/g;
    for (let i = 0; i < str1.length - 1; i++) {
        const mixed = str1.slice(i, i + 2);
        if (mixed.search(regexp) >= 0) {
            continue;
        }
        arr1.push(mixed);
    }
    for (let i = 0; i < str2.length - 1; i++) {
        const mixed = str2.slice(i, i + 2);
        if (mixed.search(regexp) >= 0) {
            continue;
        }
        arr2.push(mixed);
    }

    console.log(arr1, arr2);

    let intersection = [], sumSet = [];
    for (const i in arr1) {
        const element = arr1[i];
        sumSet.push(element);

        if (arr2.indexOf(element) > -1) {
            intersection.push(element);

            // arr2 에서 요소 제거
            const idx = arr2.indexOf(element);
            arr2.splice(idx, 1);
        }
    }

    sumSet = [...sumSet, ...arr2];

    console.log(arr1, arr2, intersection, sumSet);
    console.log(intersection.length, sumSet.length);

    const MULTI_NUM = 65536, NOT_INTERED = 0;
    // 합집합 0은 65536, 교집합 0은 0
    if (sumSet.length === 0) {
        return NOT_INTERED;
    }else if (intersection.length === 0) {
        return NOT_INTERED;
    }
    let answer = (intersection.length / sumSet.length) * MULTI_NUM;
    answer = Math.floor(answer);

    console.log('answer : ', answer);

    return answer;
}

// solution("FRANCE", "french");
// solution("aa1+aa2", "AAAA12");
// solution("handshake", "shake hands");
solution("E=M*C^2", "E=M*C^2");


/*
미리 str1, str2 의 특수문자를 제거하고 문자열 배열을 구하는 것으로 생각했는데, (1)
그게 아니라 루프를 돌면서 특수 문자를 제거해야 답을 정확히 구할 수 있었다. (2)
aa1+aa2 의 경우, (1)의 경우는 길이가 3, (2)는 2로 나온다. 
 */