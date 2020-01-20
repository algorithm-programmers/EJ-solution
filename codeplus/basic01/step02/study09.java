import java.util.Scanner;
import java.util.Stack;

/**
 * study09 자료구조 연습문제 - 쇠막대기
 * https://www.acmicpc.net/problem/10799
 */
public class study09 {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String str = sc.nextLine();
        int strLength = str.length();
        Stack<Integer> stack = new Stack<>();   // 쇠막대기의 인덱스가 담긴다.
        int answer = 0; // 잘래진 쇠막대기 조각의 총 개수
        for(int i = 0; i < strLength; i++){
            char ch = str.charAt(i);
            if(ch == '('){  // '(' 가 하나 추가될수록 쇠막대기 개수가 늘어난다.
                stack.push(i);
            }else {
                if(stack.peek() + 1 == i){  // <=> ')' 가 앞선 '(' 와 만나면 자르는 막대기가 없으므로 스택에서 제거한다.
                    stack.pop();
                    answer += stack.size(); // ((() 일 경우, ((( 가 담긴 스택의 크기가 잘려진 쇠막대기가 된다.
                }else{
                    stack.pop();    // <=> 바로 앞 인덱스에 ')' 가 나왔다.
                    answer += 1;    // )) 이므로, 막대기가 하나 +1 추가되었다는 뜻.
                }
            }
        }
        System.err.println(answer);
    }
}