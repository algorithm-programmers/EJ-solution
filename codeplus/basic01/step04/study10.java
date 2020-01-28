import java.util.Scanner;

/**
 * study10 연속합
 * https://www.acmicpc.net/problem/1912
 * i번째 수에 가능한 경우 
 * 1. i-1번째 수와 연속한 경우
 * 2. 새로운 연속합을 시작하는 경우
 */
public class study10 {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int[n];
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }
        int[] dp = new int[n];
        for (int i = 0; i < n; i++) {
            dp[i] = arr[i];     // 2번 경우
            // 수열의 첫번째 경우
            if(i == 0){
                continue;
            }
            // 1번 경우
            if(dp[i] < dp[i-1] + arr[i]){
                dp[i] = dp[i-1] + arr[i];
            }
        }
        int answer = dp[0];
        for (int i = 0; i < n; i++) {
            // 가장 큰 최댓값 구하기
            if(answer < dp[i]){
                answer = dp[i];
            }
        }
        System.out.println(answer);
    }
}