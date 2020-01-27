import java.util.Scanner;

/**
 * study08 가장 긴 증가하는 부분 수열 LTS
 * https://www.acmicpc.net/problem/11053
 */
public class study08 {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int cnt = sc.nextInt();
        int[] arr = new int[cnt];
        for (int i = 0; i < cnt; i++) {
            arr[i] = sc.nextInt();
        }
        
        int[] dp = new int[cnt];
        // arr[j]는 arr[i] 의 마지막 수 전의 수.
        for (int i = 0; i < cnt; i++) {
            dp[i] = 1;
            for (int j = 0; j < i; j++) {
                if(arr[j] < arr[i] && dp[i] < dp[j] + 1){
                    dp[i] = dp[j] + 1;
                }
            }
        }   // O(N^2)

        int answer = dp[0];
        for (int i = 0; i < cnt; i++) {
            if(answer < dp[i]){
                answer = dp[i];
            }
        }
        System.out.println(answer);
    }
}