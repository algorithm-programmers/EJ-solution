import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.Stack;

/**
 * study02 단어 뒤집기
 * 문장을 입력하면 띄어쓰기가 나오거나 문장이 끝나지 않는 이상 글자를 하나씩 스택에 넣어준다.
 * 빈칸이나 개행문자가 나오면 스택에서 글자를 하나씩 꺼내온다.
 */
public class study02 {

    public static void main(String[] args) throws IOException {
        BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(bf.readLine());
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        while(t -- > 0){
            String str = bf.readLine() + "\n";  // 21번줄 코드를 위해 입력한 문장 끝에 항상 개행문자를 더해준다.
            Stack<Character> s = new Stack<>();
            for(char ch : str.toCharArray()){
                if(ch == '\n' || ch == ' '){    // 빈칸이거나 개행문자가 나오면 스택을 비워준다.
                    while(!s.isEmpty()){
                        bw.write(s.pop());
                    }
                    bw.write(ch);
                }else{
                    s.push(ch);
                }
            }
        }
        bw.flush();
    }
}