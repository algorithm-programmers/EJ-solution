import java.util.ArrayList;
import java.util.Scanner;

/**
 * study06 연습문제 - 골드바흐의 파티션
 * https://www.acmicpc.net/problem/17103
 * 2보다 큰 짝수는 두 소수의 합으로 나타낼 수 있다
 */
public class study06 {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        ArrayList<Integer> primes = new ArrayList<Integer>();
        boolean[] checked = new boolean[1000001];
        for (int i = 2; i < 1000000; i++) {
            if(checked[i] == false){    // 소수이면
                primes.add(i);
                for (int j = i+i; j <= 1000000; j+= i) {
                    checked[j] = true;
                }
            }
        }   // 소수를 미리 찾아둠.
        int cnt = sc.nextInt();
        while(cnt-- > 0){
            int n = sc.nextInt();   // 짝수의 수만 입력받는다.
            int answer = 0;
            for(int p : primes){
                // n = 5, p = 2 (O)
                // n = 5, p = 3 (X)
                if(2 <= n - p && p <= n - p){    // 2보다 큰 짝수인지 판단. 경우의 수가 중복될 수 있으므로(2,3 혹은 3,2) p 가 n 보다 작은 수 하나만 구한다.
                    if(checked[n-p] == false){  // 소수판단
                        answer += 1;
                    }
                }else{
                    break;
                }
            }
            System.out.println(answer);
        }
    }
}