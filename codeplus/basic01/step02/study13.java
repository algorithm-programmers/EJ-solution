import java.util.Scanner;
import java.util.Stack;

/**
 * study13 후위 표기법2
 * https://www.acmicpc.net/problem/1918
 */
public class study13 {
    // 곱셈, 나눗셈이 우선순위를 가지게 된다.
    static int precedence(char ch){
        if(ch == '(') return 0;
        if(ch == '+' || ch == '-') return 1;
        return 2;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String str = sc.next();
        String answer = "";
        Stack<Character> operators = new Stack<>();
        for(char ch : str.toCharArray()){
            // 숫자는 바로 answer 에 넣는다.
            if('A' <= ch && ch <= 'Z'){
                answer += ch;   
            // 연산자와 괄호(, )는 모두 스택에 넣는다.
            }else if(ch == '('){
                operators.push(ch);
            }else if(ch == ')'){
                while(!operators.empty()){
                    char op = operators.pop();
                    if(op == '(') break;
                    answer += op;
                }
            }else{  // 연산자
                // 현재 연산자보다 operators 에 담긴 연산자의 우선순위가 더 높으면 answer 에 담는다.
                while(!operators.empty() && precedence(operators.peek()) >= precedence(ch)){
                    answer += operators.pop();
                }
                operators.push(ch);
            }
            while(!operators.empty()){
                answer += operators.pop();
            }
            System.out.println(answer);
        }
    }
}