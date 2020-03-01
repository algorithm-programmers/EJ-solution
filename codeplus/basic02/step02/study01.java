import java.util.Scanner;

/**
 * study01 N과 M 1
 * https://www.acmicpc.net/problem/15649
 * 1부터 N까지 자연수 중에서 "중복 없이" M개를 고른 수열
 */
public class study01 {
    static boolean[] c = new boolean[10];   // 숫자 사용 판단 배열
    static int[] arr = new int[10];         // 결과 저장 배열
    // index => arr의 index 번째를 채우려고 한다.
    static void go(int index, int n, int m){
        if(index == m){
            // 수열 출력
            for (int i = 0; i < m; i++) {
                System.out.println(arr[i]);
                if(i != m - 1){
                    System.out.println(' ');
                }
            }
            System.out.println();
            return;
        }
        for (int i = 1; i <= n; i++) {
            if(c[i]) continue;  // 중복 체크
            c[i] = true;
            arr[index] = i;
            // index 번째의 수 i를 넣음.
            go(index + 1, n, m);
            c[i] = false;
        }
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int m = sc.nextInt();
        go(0, n, m);
    }
}