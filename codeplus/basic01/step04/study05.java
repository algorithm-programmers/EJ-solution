import java.util.Scanner;

/**
 * study05 1, 2, 3 더하기 5
 * https://www.acmicpc.net/problem/15990
 * 합을 나타낼 때는 수를 1개 이상 사용해야 한다. * 단, 같은 수를 두 번 이상 연속해서 사용하면 안 된다.
 * dp[i][j] = i를 1,2,3 의 합으로 나타내는 방법의 수, j는 마지막에 사용한 수
 */
public class study05 {
    static final long mod = 1000000009L;
    static final int limit = 100000;
    static long[][] dp = new long[limit+1][4];

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        for (int i = 1; i <= limit; i++) {
            if(i - 1 >= 0){
                dp[i][1] = dp[i-1][2] + dp[i-1][3];
                if(i == 1){
                    dp[i][1] = 1;
                }
            }
            if(i - 2 >= 0){
                dp[i][2] = dp[i-2][1] + dp[i-2][3];
                if(i == 2){
                    dp[i][2] = 1;
                }
            }
            if(i - 3 >= 0){
                dp[i][3] = dp[i-3][1] + dp[i-3][2];
                if(i == 3){
                    dp[i][3] = 1;
                }
            }
            dp[i][1] %= mod;
            dp[i][2] %= mod;
            dp[i][3] %= mod;
        }

        int t = sc.nextInt();
        while(t-- > 0){
            int n = sc.nextInt();
            System.out.println((dp[n][1] + dp[n][2] + dp[n][3]) % mod);
        }
    }
    
    // 이해가 더 쉬운 코드
    // https://www.acmicpc.net/source/14710769
    public static void extra(String[] args) {
        Scanner s = new Scanner(System.in);
        long d[][] = new long[100001][4];
    
        d[1][1] = d[2][2] = d[3][3] = d[3][1] = d[3][2] = 1;
    
        for (int i = 4; i <= 100000; i++) {
            d[i][1] = (d[i - 1][2] + d[i - 1][3]) % 1000000009;
            d[i][2] = (d[i - 2][1] + d[i - 2][3]) % 1000000009;
            d[i][3] = (d[i - 3][1] + d[i - 3][2]) % 1000000009;
        }
        
        int T = s.nextInt();
        int n;
        for(int i=0; i<T; i++) {
            n = s.nextInt();
            System.out.println((d[n][1] + d[n][2] + d[n][3])% 1000000009);
        }
    }
}