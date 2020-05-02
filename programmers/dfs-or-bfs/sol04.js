/**
 * 여행 경로
 * 
 * @param {String[][]} tickets 항공권 정보
 */
function solution(tickets) {
    let answer = [];
    
    // 첫번째 공항은 ICN 으로 고정
    answer.push(tickets[0][0]);
    answer.push(tickets[0][1]); 

    const length = tickets.length;

    let checked = new Array(length).fill(false);
    const icnIdx = tickets.findIndex(tickek => tickek[0] === "ICN");
    checked[icnIdx] = true;  // 첫번째 공항 ICN 고정
    
    function getNextStep(prevStep){
        tickets.map((ticket, idx) => {
            if(!checked[idx] && ticket[0] === prevStep){
                answer.push(ticket[1]);
                checked[idx] = true;
            }
        });
    }

    for (let i = 0; i < length; i++) {
        getNextStep(answer.slice(-1)[0]);   // array.slice(-1)[0] : last element of Array.
        // console.log(i, answer);
    }

    console.log(answer);

    return answer;
}

solution([["ICN", "JFK"], ["HND", "IAD"], ["JFK", "HND"]]);
// solution([["ICN", "SFO"], ["ICN", "ATL"], ["SFO", "ATL"], ["ATL", "ICN"], ["ATL","SFO"]])
