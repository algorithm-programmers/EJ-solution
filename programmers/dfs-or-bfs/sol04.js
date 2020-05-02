/**
 * 여행 경로
 * "주어진 항공권을 모두 이용하여 여행경로를 짜려고 합니다."
 * "만일 가능한 경로가 2개 이상일 경우 알파벳 순서가 앞서는 경로를 return 합니다."
 * 
 * @param {String[][]} tickets 항공권 정보
 */
function solution(tickets) {
    let answer = [];
    
    // 도착지 알파벳 순 정렬
    tickets.sort((a, b) => a[1].localeCompare(b[1]));   
    // console.log(tickets);
    
    const length = tickets.length;

    let checked = new Array(length).fill(false);

    // 첫번째 공항은 ICN 으로 고정
    const icnIdx = tickets.findIndex(tickek => tickek[0] === "ICN");
    checked[icnIdx] = true;

    const icnEl = tickets.find(ticket => ticket[0] === "ICN");
    answer.push(icnEl[0]);
    answer.push(icnEl[1]);

    function getNextStep(prevStep) {
        tickets.some((ticket, idx) => {
            if (!checked[idx] && ticket[0] === prevStep) {
                // console.log(prevStep, ticket, idx);
                answer.push(ticket[1]);
                checked[idx] = true;
                return true;
            }
        });
    }

    for (let i = 0; i < length; i++) {
        getNextStep(answer.slice(-1)[0]);   // array.slice(-1)[0] : last element of Array.
        
    }

    console.log(answer);

    return answer;
}

// solution([["ICN", "JFK"], ["HND", "IAD"], ["JFK", "HND"]]);
solution([["ICN", "SFO"], ["ICN", "ATL"], ["SFO", "ATL"], ["ATL", "ICN"], ["ATL", "SFO"]]);
