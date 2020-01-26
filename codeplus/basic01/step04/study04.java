import java.util.Scanner;

/**
 * study04 카드 구매하기
 * https://www.acmicpc.net/problem/11052
 * 카드 i개를 구입할 때 최대 비용을 지불하는 방법은
 * 카드 i가 들어 있는 카드팩을 구입 + 다른 카드 i-j팩을 구매(1 <= j <= i)
 */
public class study04 {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] cardList = new int[n+1];  // 1부터 사용할 것이므로 n+1 크기로 준다.
        for (int i = 1; i <= n; i++) {
            cardList[i] = sc.nextInt();
        }
        int[] dp = new int[n+1];
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= i; j++) {
                if(dp[i] < dp[i-j] + cardList[j]){  // max 구하는 조건
                    dp[i] = dp[i-j] + cardList[j];
                }
            }
        }   // max(cardList[j] + dp[i-j]) (1 <= j <= i)
        System.out.println(dp[n]);
    }
}