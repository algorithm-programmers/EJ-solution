import java.util.Scanner;
import java.util.Stack;

/**
 * study10 오큰수
 */
public class study10 {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] array = new int[n];
        for(int i = 0; i < n; i++){
            array[i] = sc.nextInt();
        }
        // 3527 / 577-1
        int[] answer = new int[n];  // 출력용
        Stack<Integer> stack = new Stack<>();   // 오큰수 찾는 용도. 인덱스가 들어감.
        stack.push(0);
        for(int i = 1; i <= n; i++){
            if(!stack.empty() && array[stack.peek()] < array[i]){
                answer[stack.pop()] = array[i];
            }else{
                answer[stack.pop()] = -1;
            }
            stack.push(i);
        }
        System.out.println(answer);
    }
}