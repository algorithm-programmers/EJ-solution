import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.Stack;

/**
 * study08 자료구조 연습문제 - 단어, 태그 뒤집기
 * study02 참고, <태그> 안에 들어간 글자는 뒤집지 않는 규칙.
 * 주의할 점 : '<' 여는 태그가 나왔을때 스택에 쌓인 것을 다 가져오기.
 * 25~27번 코드가 없으면 <open>tag<close> 입력시 <open><close>gat 로 나온다.
 * https://www.acmicpc.net/problem/17413
 */
public class study08 {

    public static void main(String[] args) throws IOException {
        BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        String str = bf.readLine() + "\n";
        Boolean tag = false;
        Stack<Character> stack = new Stack<>();
        for(char ch : str.toCharArray()){
            if(ch == '<'){
                while(!stack.isEmpty()){
                    bw.write(stack.pop());
                }
                bw.write(ch);
                tag = true;
            }else if(ch == '>'){
                bw.write(ch);
                tag = false;
            }else if(tag){
                bw.write(ch);
            }else{
                if(ch == ' ' || ch == '\n'){
                    while(!stack.isEmpty()){
                        bw.write(stack.pop());
                    }
                    bw.write(ch);
                }else{
                    stack.push(ch);
                }
            }
        }
        bw.flush();
    }
}