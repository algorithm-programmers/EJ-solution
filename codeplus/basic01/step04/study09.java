import java.util.Scanner;

/**
 * study09 LTS 4
 * https://www.acmicpc.net/problem/14002
 * study08 심화 문제
 */
public class study09 {
    static int[] arr;
    static int[] dp;
    static int[] vp;
    // 역추적
    static void go(int p){
        if(p == -1) return;     // 시작인 경우
        go(vp[p]);      // 마지막 앞의 수 출력
        System.out.print(arr[p] + " ");
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        arr = new int[n];
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }

        dp = new int[n];
        vp = new int[n];
        for (int i = 0; i < n; i++) {
            dp[i] = 1;
            vp[i] = -1;
            for (int j = 0; j < i; j++) {
                // 수열이 증가하고, 가장 긴 값을 가질 때
                if(arr[j] < arr[i] && dp[i] < dp[j] + 1){
                    dp[i] = dp[j] + 1;
                    vp[i] = j;  // arr[i] 앞에 와야하는 인덱스를 저장
                }
            }
        }
        
        int answer = dp[0];
        int p = 0;
        for (int i = 0; i < n; i++) {
            if(answer < dp[i]){
                answer = dp[i];
                p = i;
            }
        }
        System.out.println(answer);
        go(p);
        System.out.println();
    }
}