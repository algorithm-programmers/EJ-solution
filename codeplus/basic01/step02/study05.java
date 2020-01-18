import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Stack;

/**
 * study05 에디터
 * L, D, B, P $ 명령어를 통해서 문장의 커서를 이동시킨다.
 * 커서의 왼쪽 문자열, 오른쪽 문자열을 각각 왼쪽, 오른쪽 스택으로 둔다고 생각하고 접근한다.
 */
public class study05 {

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String str = br.readLine();
        Stack<Character> left = new Stack<>();
        Stack<Character> right = new Stack<>();
        for(int i = 0 ; i < str.length(); i++){
            left.push(str.charAt(i));   // 입력받은 모든 문자열을 왼쪽 스택에 넣는다.
        }
        int m = Integer.parseInt(br.readLine());    // 명령어 개수
        while(m-- > 0){
            String[] line = br.readLine().split("");    // 명령어
            char cmd = line[0].charAt(0);
            if(cmd == 'L'){
                if(!left.empty()){
                    right.push(left.pop());
                }
            }else if(cmd == 'D'){
                if(!left.empty()){
                    left.push(right.pop());
                }
            }else if(cmd == 'B'){
                if(!left.empty()){
                    left.pop();
                }
            }else if(cmd == 'P'){
                char letter = line[1].charAt(0);
                left.push(letter);
            }
        }
        // 결과 출력을 위해서 왼쪽 스택을 모두 오른쪽으로 이동시킨다.
        while(!left.empty()){
            right.push(left.pop());
        }
        // 출력
        StringBuilder sb = new StringBuilder();
        while(!right.empty()){
            sb.append(right.pop());
        }
        System.out.println(sb);
    }
}