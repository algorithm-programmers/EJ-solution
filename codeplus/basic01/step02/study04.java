import java.util.Scanner;
import java.util.Stack;

/**
 * study04 스택 수열
 * 스택에 push 하는 순서는 반드시 오름차순이다.
 * 스택은 [1,2,3,4,5,6,...] 순서로만 들어간다.
 * 수열은 스택에서 pop 해서만 만들 수 있다.
 */
public class study04 {

    public static void isPsbl(int[] arr) {
        Stack<Integer> statck = new Stack<>();
        int m = 0;
        StringBuilder sb = new StringBuilder();
        for(int a : arr){
            if(a > m){
                while(a > m){
                    statck.push(++m);
                    sb.append("+\n");
                }
                statck.pop();
                sb.append("-\n");
            }else{
                if(statck.peek() != a){     // 스택의 top이 구하는 숫자 a가 아니면 수열이 될 수 없다.
                    System.out.println("NO");
                    return;
                }
                statck.pop();
                sb.append("-\n");
            }
        }
        System.out.println(sb);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] a = new int[n];
        for(int i = 0; i < n; i++){
            a[i] = sc.nextInt();
        }
        isPsbl(a);
    }
}