import java.util.Scanner;

/**
 * study06 쉬운 계단 수
 * https://www.acmicpc.net/problem/10844
 * 인접한 모든 자리수의 차이가 1이 나는 계단 수.
 * 길이가 n 개인 계단수는 몇 개인지 구하라.
 */
public class study06 {
    public static long mod = 1000000000L;

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        long[][] dp = new long[n+1][10];
        for (int i = 1; i <= 9; i++) {
            dp[1][i] = 1;
        }
        for (int i = 2; i <= n; i++) {
            for (int j = 0; j <= 9; j++) {
                dp[i][j] = 0;
                if(j - 1 >= 0){
                    dp[i][j] += dp[i-1][j-1];
                }
                if(j+1 <= 9){
                    dp[i][j] += dp[i-1][j+1];
                }
                dp[i][j] %= mod;
            }
        }
        long answer = 0;
        for (int i = 0; i <= 9; i++) {
            answer += dp[n][i];
        }
        System.out.println(answer % mod);
    }
}