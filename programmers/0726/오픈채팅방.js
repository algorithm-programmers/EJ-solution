/**
 * 오픈채팅방
 * 최종적으로 방을 개설한 사람이 보게 되는 메시지를 문자열 배열 형태로 return 하도록 solution 함수를 완성하라.
 * 
 * @param {string} record 채팅방 유저 변경 정보가 담긴 문자열
 */
function solution(record) {
    let userInfo = [];
    // {uid: username};

    // 최신 유저 정보 업데이트
    const ENTER = 'Enter', LEAVE = 'Leave', CHANGE = 'Chnage';
    for (let i = 0; i < record.length; i++) {
        const [, uid, username] = record[i].split(" ");

        if (username) {
            userInfo[uid] = username;
        }
    }

    console.log(userInfo);

    // 출력
    const ENTER_MSG = '님이 들어왔습니다.', LEAVE_MSG = '님이 나갔습니다.'
    const answer = record.reduce((prev, curr) => {
        const [action, uid,] = curr.split(" ");

        let username = userInfo[uid];
        if (action === ENTER) {
            prev.push(username + ENTER_MSG);
        } else if (action === LEAVE) {
            prev.push(username + LEAVE_MSG);
        } 

        return prev;

    }, []);

    console.log(answer);

    return answer;
}

solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"]);


/*

루프 한번에 출력까지 마치려고 하니 시간초과가 났다.
유저 정보 입력, 출력 따로 생각하니 시간초과가 안 났다.

*/