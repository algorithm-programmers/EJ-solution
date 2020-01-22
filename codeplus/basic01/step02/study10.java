import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.Stack;

/**
 * study10 오큰수
 * https://www.acmicpc.net/problem/17298
 */
public class study10 {

    public static void main(String[] args) throws IOException {
        BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(bf.readLine());    // bf.read(); => 런타임 에러
        int[] array = new int[n];
        String[] temp = bf.readLine().split(" ");
        for(int i = 0; i < n; i++){
            array[i] = Integer.parseInt(temp[i]);
        }
        // 3527 / 577-1
        int[] answer = new int[n];  // 출력용
        Stack<Integer> stack = new Stack<>();   // 오큰수 찾는 용도. 인덱스가 들어감.
        stack.push(0);
        for(int i = 1; i < n; i++){
            while(!stack.empty() && array[stack.peek()] < array[i]){
                answer[stack.pop()] = array[i];
            }
            stack.push(i);
        }
        // 그러면 stack 엔 오큰수가 없는 인덱스만 남게 된다. => -1 값을 준다.
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