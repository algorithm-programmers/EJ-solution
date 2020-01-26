import java.util.Scanner;

/**
 * study07 이친수
 * https://www.acmicpc.net/problem/2193
 * dp[i] = i 자리 이친수의 개수
 */
public class study07 {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        long[] dp = new long[n+1];
        dp[1] = 1;  // 1 은 된다. 0 은 안 된다.
        if(n >= 2){
            dp[2] = 1;  // 11 은 안되고 10 만 된다.
        }
        for (int i = 3; i <= n; i++) {
            dp[i] = dp[i-1] + dp[i-2];
            // 마지막 수가 0 인 dp[i-1], 마지막 수가 1인 dp[i-2]
        }
        System.out.println(dp[n]);
    }
}