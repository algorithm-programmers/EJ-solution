import java.util.ArrayList;
import java.util.Scanner;

/**
 * study12 1,2,3 더하기 3
 * https://www.acmicpc.net/problem/15988
 * study03 참고
 */
public class study12 {
    static final long mod = 1000000009L;
    static final int MAX = 1000001;

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        long[] dp = new long[MAX];
        dp[0] = 1;  // 나타낼 수 없는 경우의 수: 1
        for (int i = 1; i <= (MAX - 1); i++) {
            for (int j = 1; j <= 3; j++) {
                if(i - j >= 0){
                    dp[i] += dp[i-j];
                }
            }
            dp[i] %= mod;
        }
        int cnt = sc.nextInt();
        while(cnt-- >0){
            int n = sc.nextInt();
            System.out.println(dp[n]);
        }
    }
}