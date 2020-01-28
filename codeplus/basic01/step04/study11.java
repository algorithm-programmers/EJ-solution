import java.util.Scanner;

/**
 * study11 제곱수의 합
 * https://www.acmicpc.net/problem/1699
 * (n-i)^2 + i^2 = n
 * dp[i] = i를 제곱수의 합으로 나타냈을 때 필요한 항의 최소 개수
 * dp[i] = min(dp[i-j^2] + 1)
 */
public class study11 {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] dp = new int[n+1];
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j*j <= i; j++) {    // j <= 루트i
                if(dp[i] > dp[i-j*j] + 1){      // 최소값 구하기
                    dp[i] = dp[i-j*j] + 1;
                }                
            }
        }
        System.out.println(dp[n]);
    }
}