/**
 * 오픈채팅방
 * 최종적으로 방을 개설한 사람이 보게 되는 메시지를 문자열 배열 형태로 return 하도록 solution 함수를 완성하라.
 * 유저 아이디와 닉네임은 알파벳 대문자, 소문자를 구별한다.
 * 
 * @param {string} record 채팅방 유저 변경 정보가 담긴 문자열
 */
function solution(record) {
    let answer = [];
    // {uid: '', name: '', action: '', showing_msg: '' }

    for (let i = 0; i < record.length; i++) {
        const [action, uid, username] = record[i].split(" ");

        let showingMsg = '';
        if (action === 'Enter') {
            showingMsg = username + "님이 들어왔습니다.";
        } else if (action === 'Leave') {
            showingMsg = username + "님이 나갔습니다.";
        }

        answer.push({ uid: uid, username: username, action: action, showing_msg: username + "님이 들어왔습니다." });

        if (action === 'Change') {

        }
    }
    console.log(answer);

    return answer;
}

solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"])