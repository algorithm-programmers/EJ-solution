import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.Stack;

/**
 * study11 자료구조 연습문제 - 오등큰수
 * Scanner 로 입출력을 하니 계속 시간 초과가 남.
 * BufferedReader, BufferedWriter 을 이용하니 해결되었다.
 */
public class study11 {

    public static void main( String[] args) throws IOException {
        BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(bf.readLine());    // 입력받은 수열의 크기
        int[] arr = new int[n];     // 입력받은 수열
        int[] freq = new int[1000001];  // 수열의 요소가 등장한 횟수 수열
        String[] temp = bf.readLine().split(" ");
        for(int i = 0; i < n; i++){
            arr[i] = Integer.parseInt(temp[i]);
            freq[arr[i]] += 1;
        }
        
        Stack<Integer> stack = new Stack<>();
        stack.push(0);
        int[] answer = new int[n];  // 출력용
        for(int i = 1; i < n; i++){
            while(!stack.empty() && freq[arr[stack.peek()]] < freq[arr[i]]){
                answer[stack.pop()] = arr[i];
            }
            stack.push(i);
        }
        while(!stack.empty()){
            answer[stack.pop()] = -1;
        }
        // 출력
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        for (int i=0; i< n; i++) {
            bw.write(answer[i] + " ");
        }
        bw.write("\n");
        bw.flush();
    }
}