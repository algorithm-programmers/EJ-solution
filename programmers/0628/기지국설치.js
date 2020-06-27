/**
 * 기지국 설치
 * 
 * @param {number} n 아파트의 개수
 * @param {number[]} stations 현재 기지국이 설치된 아파트의 번호가 담긴 1차원 배열
 * @param {number} w 전파의 도달 거리
 */
function solution(n, stations, w) {
    const INSTALLED = true, UNINSTALLED = false;
    let apartArr = new Array(n).fill(UNINSTALLED);

    function installStations(stationLoc) {
        let startIdx = stationLoc - w;
        startIdx = startIdx < 0 ? 0 : startIdx;
        let endIdx = stationLoc + w + 1;
        endIdx = endIdx > n ? n : endIdx;
        
        console.log(stationLoc, startIdx, endIdx);

        for (let i = startIdx - 1; i < endIdx; i++) {
            apartArr[i] = INSTALLED;
        }
    }

    stations.map(station => {
        installStations(station);
    });

    // console.log(apartArr, apartArr.length);

    let addingStation = 0;

    while (apartArr.includes(UNINSTALLED)) {
        for (let j = 0; j < n; j++) {
            const apartStatus = apartArr[j];
            if (!apartStatus) {
                console.log(j, apartArr);
                
                installStations(j);
                addingStation += 1;
            }
        }
    }

    // console.log(apartArr, apartArr.length, addingStation);

    return addingStation;
}

// solution(11, [4, 11], 1);   // 3
solution(16, [9], 2);       // 3