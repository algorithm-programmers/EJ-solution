import java.util.Scanner;

/**
 * study04 리모컨
 * https://www.acmicpc.net/problem/1107
 */
public class study04 {
    static boolean[] brokenList = new boolean[10];  // 고장난 버튼 리스트
    // 버튼을 몇 번 눌러야 하는지 반환
    static int possible(int c){
        // 채널이 0인 경우 예외처리
        if(c == 0){
            return brokenList[0] ? 0 : 1;
        }
        int len = 0;
        while(c > 0){
            if(brokenList[c % 10]){
                return 0;
            }
            len += 1;
            c /= 10;
        }
        return len;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();   // 이동하려는 채널
        int brokenBtnCnt = sc.nextInt();   // 고장난 버튼의 개수
        for (int i = 0; i < brokenBtnCnt; i++) {
            int brokeBtn = sc.nextInt();
            brokenList[brokeBtn] = true;
        }
        // 초깃값 설정
        int answer = n - 100;   // 현재 보고 있는 채널은 100번
        // 아무 버튼도 누르지 않았을 경우
        if(answer < 0){
            answer = - answer;
        }
        // 채널 0 <= n <= 500,000 이기 때문에 + 버튼만 누르는 경우와 - 버튼만 누르는 경우 두 가지를 생각해야한다. => 범위가 그만큼 커진다. 
        // 1. 이동할 채널 channel를 정한다.
        for (int i = 0; i <= 1000000; i++) {
            int channel = i;
            // 2. 채널 중에 고장난 버튼이 있는지 확인한다.
            int len = possible(channel);
            if(len > 0){    // 불가능하지 않다면
                int press = channel - n;
                if(press < 0){
                    press = - press;
                }
                if(answer > len + press){
                    answer = len + press;
                }
            }
        }
        System.out.println(answer);
    }
}