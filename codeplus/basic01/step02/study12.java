import java.util.Scanner;
import java.util.Stack;

/**
 * study12 후위 표기법
 * https://www.acmicpc.net/problem/1935
 */
public class study12 {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        String postfix = sc.next();
        double[] operand = new double[n];
        for (int i = 0; i < n; i++) {
            operand[i] = sc.nextDouble(); 
        }
        // 입력 끝

        Stack<Double> stack = new Stack<>();
        for(char ch : postfix.toCharArray()){
            if(ch >= 'A' && ch <= 'Z'){ // 연산자 제외 문자만 따로 계산
                stack.push(operand[(int)(ch - 'A')]);
            }else {
                double op2 = stack.pop();
                double op1 = stack.pop();   // 숫자 두 개씩 계산하므로 변수 2개 선언

                if(ch == '+'){
                    stack.push(op1 + op2);
                }else if(ch == '-'){
                    stack.push(op1 - op2);
                }else if(ch == '*'){
                    stack.push(op1 * op2);
                }else if(ch == '/'){
                    stack.push(op1 / op2);
                }
            }
        }
        System.out.printf("%.2f\n", stack.pop());   // %.2f : 소숫점 둘째 자리까지 출력
    }
}