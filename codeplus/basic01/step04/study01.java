import java.util.Scanner;

/**
 * study01 1로 만들기
 * https://www.acmicpc.net/problem/1463
 * 정수 X에 대해서 세가지 연산을 사용한다.
 * 1. X가 3으로 나누어 떨어지면, 3으로 나눈다.
 * 2. X가 2로 나누어 떨어지면, 2로 나눈다.
 * 3. 1을 뺀다.
 */
public class study01 {
    public static int[] d;
    public static int go(int n){
        if(n == 1) return 0;
        if(d[n] > 0) return d[n];
        d[n] = go(n - 1) + 1;   // 먼저 d(n - 1) + 1 로 경우의 수 1을 전체에 적용한다.
        if(n%2 == 0){
            int temp = go(n/2) + 1;
            if(temp < d[n]){    // 그리고 실제 연산 결과를 비교해준다.
                d[n] = temp;
            }
        }
        if(n%3 == 0){
            int temp = go(n/3) + 1;
            if(temp < d[n]){
                d[n] = temp;
            }
        }

        return d[n];
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        d = new int[n + 1];
        System.out.println(go(n));
    }
}