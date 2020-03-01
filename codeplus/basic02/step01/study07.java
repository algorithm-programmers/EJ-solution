import java.util.Scanner;

/**
 * study02 수 이어 쓰기 1
 * https://www.acmicpc.net/problem/1748
 */
public class study07 {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        long answer = 0;
        // ex) start, end => 1, 9 / 10, 99 / 100, 999...
        for (int start = 1, len = 1; start <= n; start *= 10, len ++) {
            int end = start * 10 - 1;
            // n이 end보다 작을 경우의 예외 처리
            if(end > n){
                end = n;
            }
            // 수의 개수 => end - start + 1
            answer += (long)(end - start + 1) * len;
        }
        System.out.println(answer);
    }
}