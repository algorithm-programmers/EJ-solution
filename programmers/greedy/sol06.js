/**
 * 단속카메라
 * routes[i][0]에는 i번째 차량이 고속도로에 진입한 지점
 * routes[i][1]에는 i번째 차량이 고속도로에서 나간 지점
 * 차량 동선이 "최대한 많이 겹치는" 구간에 카메라를 설치하자
 * 참고 : https://gurumee92.tistory.com/184
 * 
 * @param {Array.<Array<number>} routes 차량의 이동 경로
 */
function solution(routes) {
    let answer = 0;

    routes.sort((a, b) => a[1] - b[1]); // 나간 시점 기준으로 정렬

    let currCam = -30000;   // "차량의 진입 지점은 -30,000 이상"
    routes.map(route => {
        if(currCam < route[0]){
            answer += 1;
            currCam = route[0];
        }
    })

    console.log(answer);
    
    return answer;
}

solution([[-20,15], [-14,-5], [-18,-13], [-5,-3]], 2);